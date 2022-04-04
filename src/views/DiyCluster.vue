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

  import GraphicsLayer  from '@arcgis/core/layers/GraphicsLayer';
  import Sketch from '@arcgis/core/widgets/Sketch'

  import QuadTreeNode from '@/class/QuadTreeNode'
  import * as webMercatorUtils from "@arcgis/core/geometry/support/webMercatorUtils";

  export default {
    name: 'DiyCluster',
    components: {},
    data () {
      return {
        totalNum: 0,
        map: null,
        view: null,
        quadTree: null,

        filterList: [
          {id: 0, count:0, label: '在线', value: 'ONLINE', active: true},
          {id: 1, count:0, label: '离线', value: 'OFFLINE', active: true},
          {id: 2, count:0, label: '未激活', value: 'UNACTIVATED', active: true},
        ]

      }
    },
    mounted () {
      this.initMap()

    },
    methods: {
      initMap(){
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
          position: 'bottom-left'
        })

        //view创建完成后开始监听事件
        view.when(async () => {
          this.initBind()
          //创建图层
          this.initClusterLayer()
          //创建聚合类
          await this.initClusterClass()

          this.resetCluster()
        })

        this.map = map
        window._view = this.view = view
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

        this.view.on('mouse-wheel', (event)=>{
          this.resetCluster()
        })

      },

      async initClusterClass(){

        const res = await axios.get(`${process.env.BASE_URL}/static/mockData.json`)
        const data = res.data.data
        const {xmin, ymin, xmax, ymax} = this.view.extent
        const [minX, minY] = webMercatorUtils.xyToLngLat(xmin, ymin)
        const [maxX, maxY] = webMercatorUtils.xyToLngLat(xmax, ymax)

        //创建四叉树
        const points = data.map(item => {
          const {id, location} = item
          return {
            id,
            x: location[0],
            y: location[1]
          }
        })
        const tree = new QuadTreeNode(points, {extent: {minX, minY, maxX, maxY}})
        this.quadTree = tree
      },

      //重置 聚合点
      resetCluster(){



        const {xmin, ymin, xmax, ymax} = this.view.extent
        const [minX, minY] = webMercatorUtils.xyToLngLat(xmin, ymin)
        const [maxX, maxY] = webMercatorUtils.xyToLngLat(xmax, ymax)

        //当前的视野划分网格
        const AMOUNT = 10
        const h = (maxY - minY) / AMOUNT
        const w = (maxX - minX) / AMOUNT
        const grids = []
        for (let i = 0; i < AMOUNT; i++) {
          grids.push({
            xmin: minX + w * i,
            xmax: minX + w * (i + 1),
            ymin: minY + h * i,
            ymax: minY + h * (i + 1)
          })
        }
        // const grids = []
        // const UNIT = 0.2
        // for (let i = 0; minX + UNIT * i < maxX; i++) {
        //   for (let j = 0; minY + UNIT * j < maxY; j++) {
        //     grids.push({
        //       xmin: minX + UNIT * i,
        //       xmax: minX + UNIT * (i + 1),
        //       ymin: minY + UNIT * j,
        //       ymax: minY + UNIT * (j + 1)
        //     })
        //   }
        // }

        let arr = []
        grids.forEach(grid => {
          const points = this.quadTree.findPoints(grid)
          const point = this.mergetPoints(points)
          //聚合单个网格上的点
          arr = [...arr, point]
        })

        console.log(arr)
        this.updateClusterLayer(arr)
      },

      ///聚合单个网格上的点
      mergetPoints(points) {
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
          count: len
        }
      },

      async initClusterLayer() {

        let layer = new FeatureLayer({
          id:'cluster1',
          title:'聚合图层',
          outFields: ["*"],
          fields: [
            {name: "ObjectID", type: "string"},
            {name: "count", type: "string"},
            {name: "type", type: "string"},
          ],
          source: [],
          visible: true,
          objectIdField: "ObjectID",
          geometryType: 'point',
          renderer: {
            type: "simple",
            symbol: {
              type: "simple-marker",
              size: '30px',
              color: "#FF0F43",
              outline: {
                width: 2,
                color: "#fff"
              }
            }
          },
          labelingInfo:[ new LabelClass({
            labelPlacement:'center-center',
            labelExpressionInfo: { expression: "$feature.count" },
            symbol: {
              type: "text",
              color: "#fff",
              haloSize: 1,
              haloColor: "#FF0F43"
            }
          })]

        })
        this.map.add(layer)
        this.clusterLayer = layer
      },

      async updateClusterLayer(data){

        const layer = this.clusterLayer

        // 获取待清除的图层要素id
        const ObjectIds = await layer.queryObjectIds();
        const deleteFeatures = ObjectIds.map((v) => {
          return { objectId: v };
        })

        // 获取待添加的图层要素
        const addFeatures = data.map((item) => {
          return this.createGraphic(item, 'point');
        });

        //更新图层
        const results = await layer.applyEdits({ deleteFeatures, addFeatures });
      },

      createGraphic(item, type) {

        var props

        switch(type){
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

  .map-point-tip{
    position: absolute;
    top:-9999px;
    left: -9999px;
    padding: .4em ;
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
