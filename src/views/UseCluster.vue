<template>
  <div class="wrap">
    <div id="viewDiv" class="container"></div>

    <!--数据过滤-->
    <!--<div class="filter-panel"  >-->
      <!--<ul >-->
        <!--<li v-for="item in filterList" :key="item.id" :class="{active: item.active}" @click="checkItem(item)">-->
          <!--<span>{{item.label}}</span>-->
          <!--<span>({{item.count}})</span>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</div>-->

  </div>
</template>

<script>
  // 参考案例
  // https://developers.arcgis.com/javascript/latest/sample-code/sandbox/?sample=featurereduction-cluster-query

  import axios from 'axios'
  import Map from '@arcgis/core/Map';
  import Graphic from '@arcgis/core/Graphic';
  import LayerList from '@arcgis/core/widgets/LayerList'
  import MapView from '@arcgis/core/views/MapView';
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

  import GraphicsLayer  from '@arcgis/core/layers/GraphicsLayer';
  import Sketch from '@arcgis/core/widgets/Sketch'

  export default {
    name: 'UserCluster',
    components: {},
    data () {
      return {
        totalNum: 0,
        map: null,
        view: null,


        filterList: [
          {id: 0, count:0, label: '在线', value: 'ONLINE', active: true},
          {id: 1, count:0, label: '离线', value: 'OFFLINE', active: true},
          {id: 2, count:0, label: '未激活', value: 'UNACTIVATED', active: true},
        ]

      }
    },
    mounted () {
      this.initMap()
      this.initBind()
      this.initDeviceLayer()
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

      },

      // 获取所有图标类型声明
      getUniqueValueInfos(){

        const uniqueValueInfos = this.filterList.map((item,index)=>{
          return {
            value: item.value,
            symbol: {
              type: "picture-marker",
              url: `/static/images/svg/camera_m_${index + 1}.svg`
            }
          }
        })
        return uniqueValueInfos
      },

      //初始化设备图层
      async initDeviceLayer(){

        const source = await this.getDeviceData()
        const uniqueValueInfos = this.getUniqueValueInfos()

        //聚合配置
        const clusterConfig = {
          type: "cluster",
          clusterRadius: "100px",
          popupTemplate: {
            title: "设备聚合",
            content: "共有{cluster_count}个设备,状态为{cluster_type_91c828acc5960230bb07c9e0e6781429}的设备占比最多",
            fieldInfos: [
              {
                fieldName: "cluster_count",
                format: {
                  places: 0,
                  digitSeparator: true
                }
              }
            ]
          },
          clusterMinSize: "24px",
          clusterMaxSize: "60px",
          labelingInfo: [
            {
              deconflictionStrategy: "none",
              labelExpressionInfo: {
                expression: "Text($feature.cluster_count, '#,###')"
              },
              symbol: {
                type: "text",
                color: "#3744e7",
                haloColor: '#fff',
                haloSize: "2px",
                yoffset: 4,
                font: {
                  weight: "bold",
                  size: "14px"
                }
              },
              labelPlacement: "center-center"
            }
          ]
        }

        const layer = new FeatureLayer({
          id: 'deviceLayer',
          title: "设备图层",
          //从attributes中获取的内部fields
          fields: [
            {
              name: "ObjectID",
              type: "oid"
            },
            {
              name: "id",
              type: "string"
            },
            {
              name: "deviceUid",
              type: "string"
            },
            {
              name: "deviceStatus",
              type: "string"
            }
          ],
          featureReduction: clusterConfig,
          //让所有fields对外可访问
          outFields: ["*"],
          objectIdField: "ObjectID",
          geometryType: "point",
          source: [],
          renderer: {
            type: "unique-value",
            //提取deviceStatus作为渲染图标类型的标识
            valueExpression: `return $feature.deviceStatus`,
            //所有图标类型声明
            uniqueValueInfos,
            //根据缩放程度调整尺寸
            visualVariables: [
              {
                type: "size",
                valueExpression: "$view.scale",
                stops: [
                  { value: 500000, size: 2 },
                  { value: 250000, size: 10 },
                  { value: 125000, size: 15 },
                  { value: 32000, size: 30 },
                ]
              }
            ]

          },
          popupTemplate: {
            title: "{deviceUid}",
            content: [{
              type: "fields",
              fieldInfos: [{
                label: '设备Uid',
                fieldName: 'deviceUid'
              },{
                label: '设备id',
                fieldName: 'id'
              },{
                label: '设备状态',
                fieldName: 'deviceStatus'
              }]
            }]
          }
        })
        this.map.add(layer)

        layer.applyEdits({addFeatures: source}).then(results => {
          console.log(`deleteFeatures:${results.deleteFeatureResults.length}`)
          console.log(`addFeatures:${results.addFeatureResults.length}`)
        })

      },


      checkItem(item){
        item.active = !item.active
        const values = this.filterList.filter(item => item.active == true).map(item => item.value)
        this.filterDeviceLayer({mode: 'deviceStatus', values})
      },

      initDraw(){

        //绘图工具
        const drawlayer = new GraphicsLayer({
          id: 'canvas',
          title: '绘图面板',
        })
        this.map.add(drawlayer)

        const sketch = new Sketch({
          layer:drawlayer,
          view: this.view,
          creationMode: 'update'
        })
        this.view.ui.add(sketch, 'bottom-right')
        sketch.on('update', (event) => {
          if(event.graphics[0].geometry){
            console.log(JSON.stringify(event.graphics[0].geometry.rings))
          }
        })
        this.sketch = sketch

      },


      /**
       * 前端过滤图层数据
       * mode {String} 过滤属性名
       * values {Array} 过滤值数组
       */
      filterDeviceLayer ({mode, values = []} = {}) {

        const deviceLayer = this.map.findLayerById('deviceLayer')

        this.view.whenLayerView(deviceLayer).then(function (layerView) {

          let queryStr = ''
          if (values.length > 0) {
            queryStr +=  values.map(o => {
              return `${mode}='${o}'`
            }).join(' OR ')
          }

          console.log('queryStr: ', queryStr)
          layerView.filter = {where: queryStr}

          //重新渲染
          deviceLayer.refresh()
        })

      },

      //计算各状态的设备数量
      countDeviceData(data) {
        const KEYMAP = {
          ONLINE: {count: 0, index:0},
          OFFLINE:  {count: 0, index:1},
          UNACTIVATED:  {count: 0, index:2}
        }
        data.forEach(item => {
          var match = KEYMAP[item.deviceStatus]
          if (match) {
            match.count ++
          }
        })

        Object.keys(KEYMAP).forEach(key=>{
          const {index, count} = KEYMAP[key]
          this.filterList[index].count = count
        })
        // console.log(this.filterList)
      },

      // 请求所有设备点数据，请包装为graphic
      getDeviceData(){
        return new Promise(resolve=>{

          axios.get(`${process.env.BASE_URL}/static/mockData.json`).then(res=>{

            var data = res.data.data

            //创建更多模拟数据
            const moreData = []
            data.forEach(item => {
              for (let i = 0; i < 50; i++){
                let [longitude, latitude] = item.location
                let random1 = Math.random()
                let random2 = Math.random()
                let id =  new Date().getTime()
                longitude += (random1 > 0.5 ? 1 : -1) * random1 * 1
                latitude += (random2 > 0.5 ? 1 : -1) * random2 * 1
                moreData.push({
                  id,
                  deviceUid: id,
                  location: [longitude, latitude],
                  deviceStatus: "UNACTIVATED"
                })
              }
            })
            data = data.concat(moreData)
            console.log(`data count: ${data.length}`)

            this.countDeviceData(data)

            const graphics = []
            data.forEach(item => {
              const [longitude, latitude] = item.location
              let graphic = new Graphic({
                //每个点的地理属性
                geometry: {
                  type: "point",
                  latitude,
                  longitude
                },
                //每个点的属性
                attributes: item
              })
              graphics.push(graphic)
            })

            resolve(graphics)
          })

        })
      }

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
