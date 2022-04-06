<template>
  <div class="wrap">
    <div id="viewDiv" class="container"></div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Map from '@arcgis/core/Map';
  import Graphic from '@arcgis/core/Graphic';
  import LayerList from '@arcgis/core/widgets/LayerList'
  import MapView from '@arcgis/core/views/MapView';
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
  import LabelClass from "@arcgis/core/layers/support/LabelClass"

  import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
  import Sketch from '@arcgis/core/widgets/Sketch'

  import QuadTreeNode from '@/class/QuadTreeNode'
  import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

  export default {
    name: 'DiyCluster',
    components: {},
    data() {
      return {
        totalNum: 0,
        map: null,
        view: null,
        quadTree: null,

        filterList: [
          {id: 0, count: 0, label: '在线', value: 'ONLINE', active: true},
          {id: 1, count: 0, label: '离线', value: 'OFFLINE', active: true},
          {id: 2, count: 0, label: '未激活', value: 'UNACTIVATED', active: true},
        ]

      }
    },
    mounted() {
      this.initMap()

    },
    methods: {
      initMap() {
        //创建地图
        const map = new Map({
          // basemap: "osm-standard" //矢量图
          basemap: "hybrid" //卫星图
          // ,layers: ['topo-vector']
        })

        //创建2D视图
        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 11,
          center: [113.54735115356235, 22.78385103258788],
          //extent 优先于zoom和center
        })

        //图层列表
        var layerList = new LayerList({
          view: view
        })
        view.ui.add(layerList, {
          position: 'bottom-right'
        })

        //view创建完成后开始监听事件
        view.when(async () => {
          this.initBind()

          await this.getData()

          //创建散点图层
          this.initPointLayer()

          //创建聚合图层
          this.initClusterLayer()
          //创建聚合类
          await this.initClusterClass()

          this.resetCluster()
        })

        //地图缩放
        view.watch("zoom", (e) => {
          if (this.view.zoom % 1 == 0) {
            console.log(`zoom ${this.view.zoom}`)
            this.resetCluster()
          }
        })
        //地图移动
        view.on('drag', (e) => {
          const {action} = e
          if (action == 'end') {
            this.resetCluster()
          }
        })
        //地图尺寸
        view.on('resize', (e) => {
          console.log('resize')
        })

        this.map = map
        window._view = this.view = view
      },

      async getData() {
        const res = await axios.get(`${process.env.BASE_URL}/static/mockData.json`)
        this.data = res.data.data.map(item => {
          const {id, location} = item
          return {
            id,
            x: location[0],
            y: location[1]
          }
        })
      },

      //鼠标事件监听
      initBind() {

        this.view.on('click', (event) => {

          this.view.hitTest(event).then((res) => {

            if (!res.results || !res.results.length) {
              return
            }

            const {attributes} = res.results[0].graphic
            console.log(`attribute：${JSON.stringify(attributes)}`)
          })

        })

      },

      async initClusterClass() {
        const {xmin, ymin, xmax, ymax} = this.view.extent
        const [minX, minY] = webMercatorUtils.xyToLngLat(xmin, ymin)
        const [maxX, maxY] = webMercatorUtils.xyToLngLat(xmax, ymax)

        //创建四叉树
        const points = [...this.data]
        const tree = new QuadTreeNode(points, {extent: {xmin:minX, ymin: minY, xmax: maxX, ymax: maxY}})
        this.quadTree = tree
      },

      drawGrid(grids) {
        console.log('drawGrid')
        if (!this.asssetLayer) {
          const layer = new GraphicsLayer({
            title: '网格图层',
            id: 'gridLayer',
            graphics: []
          })
          this.map.add(layer)
          this.asssetLayer = layer
        }
        this.asssetLayer.removeAll()

        const lines = []
        grids.forEach(item => {
          const {xmin, ymin, xmax, ymax} = item
          const line = new Graphic({
            geometry: {
              type: "polyline",
              paths: [
                [xmin, ymin],
                [xmax, ymin],
                [xmax, ymax],
                [xmin, ymax],
                [xmin, ymin],
              ]
            },
            symbol: {
              type: "simple-line",
              color: '#f00',
              width: 1
            },
            attributes: {}
          })
          lines.push(line)
        })

        this.asssetLayer.addMany(lines)
      },

      //重置 聚合点
      resetCluster() {

        const extent = this.view.extent
        const [xmin, ymin] = webMercatorUtils.xyToLngLat(extent.xmin, extent.ymin)
        const [xmax, ymax] = webMercatorUtils.xyToLngLat(extent.xmax, extent.ymax)

        //当前的视野划分网格
        const AMOUNT = 10
        const gl = Math.min(ymax - ymin, xmax - xmin) / AMOUNT
        const grids = []

        for (let i = 0; ymin + gl * (i + 1) <= ymax; i++) {
          for (let j = 0; xmin + gl * (j + 1) <= xmax; j++) {
            grids.push({
              xmin: xmin + gl * j,
              xmax: xmin + gl * (j + 1),
              ymin: ymin + gl * i,
              ymax: ymin + gl * (i + 1)
            })
          }
        }

        this.drawGrid(grids)

        let arr = []
        grids.forEach((grid, index) => {

          const points = this.quadTree.findPoints(grid)
          if (points.length > 0) {
            const point = this.fusePoints(points, index)
            arr.push(point)
          }
        })

        this.updateClusterLayer(arr)
      },

      /**
       * 获取单个网格上的聚合点
       * 聚合点为网格内所有点的平均质心
       * @param points
       * @param id
       * @returns {{x: number, y: number, count: *, id: *}}
       */
      fusePoints(points, id) {
        let totalX = 0
        let totalY = 0
        let len = points.length
        points.forEach(({x, y}) => {
          totalX += x
          totalY += y
        })
        return {
          x: totalX / len,
          y: totalY / len,
          count: len,
          isCluster: len > 1 ? 1 : 0,
          id
        }
      },

      initPointLayer() {

        const source = this.data.map(item => {
          return this.createGraphic(item, 'point')
        })

        let layer = new FeatureLayer({
          id: 'cluster1',
          title: '聚合图层',
          outFields: ["*"],
          fields: [
            {name: "ObjectID", type: "string"},
            {name: "count", type: "string"},
            {name: "type", type: "string"},
          ],
          source,
          visible: true,
          objectIdField: "ObjectID",
          geometryType: 'point',
          renderer: {
            type: "simple",
            symbol: {
              type: "simple-marker",
              size: '10',
              color: "#c3ff74",
              outline: {
                width: 0,
                color: "#fff"
              }
            }
          }
        })
        this.map.add(layer)
        this.clusterLayer = layer
      },

      async initClusterLayer() {

        let layer = new FeatureLayer({
          id: 'cluster1',
          title: '聚合图层',
          outFields: ["*"],
          fields: [
            {name: "ObjectID", type: "string"},
            {name: "count", type: "string"},
            {name: "id", type: "string"},
            {name: "isCluster", type: "integer"},
          ],
          source: [],
          visible: true,
          objectIdField: "ObjectID",
          geometryType: 'point',
          renderer : {
            // type: "unique-value",
            // field: 'isCluster',
            // defaultSymbol: {type: "simple-fill"},
            // uniqueValueInfos: [{
            //   value: 0,
            //   symbol: {
            //     type: "simple-fill",
            //     size: '20px',
            //     color: "#3c88ff"
            //   }
            // },{
            //   value: 1,
            //   symbol: {
            //     type: "simple-fill",
            //     size: '20px',
            //     color: "#ff5b58"
            //   }
            // }],
            type: "simple",
            symbol: {
              type: "simple-marker",
              size: '20',
              color: "#FF0F43",
              outline: {
                width: 2,
                color: "#fff"
              }
            },
            visualVariables:[{
              type: "size",
              field: "count",
              minDataValue: 1,
              maxDataValue: 100,
              minSize: 20,
              maxSize: 80
            }]
          },
          labelingInfo: [new LabelClass({
            labelPlacement: 'center-center',
            labelExpressionInfo: {expression: "$feature.count"},
            symbol: {
              type: "text",
              color: "#fff",
              haloSize: 1,
              haloColor: "#FF0F43",
              font:{
                size: 14,
                weight: "bold"
              }
            }
          })]

        })
        this.map.add(layer)
        this.clusterLayer = layer
      },

      async updateClusterLayer(data) {

        const layer = this.clusterLayer

        // 获取待清除的图层要素id
        const ObjectIds = await layer.queryObjectIds();
        const deleteFeatures = ObjectIds.map((v) => {
          return {objectId: v};
        })

        // 获取待添加的图层要素
        const addFeatures = data.map((item) => {
          return this.createGraphic(item, 'point');
        });

        //更新图层
        const results = await layer.applyEdits({deleteFeatures, addFeatures});
        console.log(results)
      },

      createGraphic(item, type) {

        var props

        switch (type) {
          case 'point':
            props = {
              longitude: item.x,
              latitude: item.y,
            }
            break;
          case 'polygon':
            props = {
              rings: item.coordinates
            }
            break;
          case 'polyline':
            props = {
              paths: [item.coordinates]
            }
            break;
          default:
            break;
        }
        return new Graphic({
          attributes: item,
          geometry: Object.assign({
            type: type
          }, props)
        })

      },


    }
  }
</script>

<style lange="scss" type="text/scss">
  .esri-zoom {
    display: none;
  }
</style>
<style lang="scss" type="text/scss" scoped>

  .map-point-tip {
    position: absolute;
    top: -9999px;
    left: -9999px;
    padding: .4em;
    border-radius: 4px;
    background-color: #0f286a;
    transition: all .3s;
    color: #fff;
    font-size: 14px;
    max-width: 220px;
  }

  .filter-panel {
    position: fixed;
    top: 2em;
    right: 2em;
    background-color: #fff;

    li {
      padding: 0.5em 1em 0.5em 2.3em;
      background: transparent url("~@/assets/image/ico-checkbox.svg") no-repeat 8px center;
      cursor: pointer;
      text-align: left;

      &.active {
        background: transparent url("~@/assets/image/ico-checkbox2.svg") no-repeat 8px center;
      }
      &:hover {
        background-color: #0088ee;
        color: #fff;
      }

    }
  }
</style>
