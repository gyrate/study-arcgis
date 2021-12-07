<template>
  <div class="wrap">
    <div ref="dom" class="container"></div>

    <div class="map-point-popup" :style="currTipStyle" v-show="currTip">
      <p>device amount: <span class="str">{{currData.length}}</span></p>
      <table>
        <tr v-for="(item,index) in currData" :key="index">
          <td>deviceUid: {{item.deviceUid}}</td>
          <td>status: {{item.deviceStatus}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Map from '@arcgis/core/Map';
  import Graphic from '@arcgis/core/Graphic';
  import LayerList from '@arcgis/core/widgets/LayerList'
  import MapView from '@arcgis/core/views/MapView';
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
  import LabelClass from '@arcgis/core/layers/support/LabelClass'

  export default {
    name: "QueryFeatureLayer",
    components: {},
    data() {
      return {
        map: null,
        view: null,

        currTipStyle:{},
        currTip: false,
        currData: [],

        filterList: [
          {id: 0, count:0, label: '在线', value: 'ONLINE', active: true},
          {id: 1, count:0, label: '离线', value: 'OFFLINE', active: true},
          {id: 2, count:0, label: '未激活', value: 'UNACTIVATED', active: true},
        ]
      }
    },
    mounted() {
      this.initMap()
      this.initBind()
      this.initDeviceLayer()
    },
    methods: {
      initMap(){
        //创建地图
        const map = new Map({
          basemap: "topo" //卫星图
        })

        //创建2D视图
        const view = new MapView({
          container: this.$refs['dom'],
          map: map,
          zoom: 16,
          center: [113.52413395232718, 22.78525564534359],

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

          const {x, y} = event

          this.queryFeatureLayer(event.mapPoint).then(features=>{
            console.log(features)

            this.currData = features.map(item => {
              const {deviceStatus, deviceUid} = item.attributes
              return {
                deviceStatus,
                deviceUid
              }
            })

            if (features.length) {
              this.currTipStyle = {
                left: x + 15 + 'px',
                top: y + 15 + 'px'
              }
              this.currTip = true
            } else {
              this.currTip = false
            }

          })
        })
      },

      /**
       * 通过坐标点查找特征
       * @param mapPoint 地图坐标点
       */
      queryFeatureLayer(mapPoint){

        const deviceLayer = this.map.findLayerById('deviceLayer')
        let query = deviceLayer.createQuery()
        query.geometry = mapPoint
        query.distance = 200
        query.units = "meters"
        query.spatialRelationship = 'intersects'
        query.returnGeometry = true
        query.outFields = ['deviceStatus', 'deviceUid', 'id']

        return new Promise(resolve =>{

          deviceLayer.queryFeatures(query).then(res=>{
            const match = res.features

            resolve(match)
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
              url: `${process.env.BASE_URL}/static/images/svg/camera_m_${index + 1}.svg`
            }
          }
        })
        return uniqueValueInfos
      },

      //初始化设备图层
      async initDeviceLayer(){

        const source = await this.getDeviceData()
        const uniqueValueInfos = this.getUniqueValueInfos()

        const statusMap = {
          ONLINE:'在线',
          OFFLINE:'离线',
          UNACTIVATED:'未激活'
        }

        const labelClass = new LabelClass({
          symbol: {
            type: 'text',
            color: '#fff',
            haloColor: "#144ce7",
            haloSize: 1,
            font: { size: 10, weight: "bold"}
          },
          deconflictionStrategy: 'none',
          labelPlacement: 'above-center',
          labelExpressionInfo: {
            expression: `return $feature.deviceStatus`
          }
        })

        const layer = new FeatureLayer({
          id: 'deviceLayer',
          title: "设备图层",
          labelingInfo: [labelClass],
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
          //让所有fields对外可访问
          outFields: ["*"],
          objectIdField: "ObjectID",
          geometryType: "point",
          source,
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

          }
        })
        this.map.add(layer)
      },

      // 请求所有设备点数据，请包装为graphic
      getDeviceData(){
        return new Promise(resolve=>{

          axios.get(`${process.env.BASE_URL}/static/mockData.json`).then(res=>{

            var data = res.data.data

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
      },

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
.map-point-popup{
  position: absolute;
  top:-9999px;
  left: -9999px;
  padding: .4em ;
  border-radius: 4px;
  background-color: #fff;
  transition: all .4s;
  color: #333;
  font-size: 14px;
  max-width: 400px;

  p{
    padding: 0.3em;
  }
  table{
    border-collapse: collapse;
    td{
      padding: 0.5em;
      border: 1px solid #ccc;
    }
  }
  .str{
    font-weight: bold;
  }
}
</style>
