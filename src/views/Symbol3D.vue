<template>
  <div class="wrap">
    <div ref="dom" class="container"></div>
  </div>
</template>

<script>
  import SpatialReference from '@arcgis/core/geometry/SpatialReference'
  import TileLayer from '@arcgis/core/layers/TileLayer'
  import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
  import LabelClass from '@arcgis/core/layers/support/LabelClass'

  import Map from '@arcgis/core/Map'
  import SceneView  from '@arcgis/core/views/SceneView';
  import LayerList from '@arcgis/core/widgets/LayerList'
  import Point from '@arcgis/core/geometry/Point'

  import Graphic from '@arcgis/core/Graphic'
  import GraphicsLayer  from '@arcgis/core/layers/GraphicsLayer'

  import PointSymbol3D from "@arcgis/core/symbols/PointSymbol3D"
  import ObjectSymbol3DLayer from "@arcgis/core/symbols/ObjectSymbol3DLayer"
  import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer'

  export default {
    name: 'Symbol3D',
    components: {},
    data() {
      return {}
    },
    mounted() {
      this.init()
      this.initTreeLayer()
      this.initBind()
    },
    methods: {
      init(){
        //创建地图
        const map = new Map({
          basemap: "hybrid", //卫星图
          ground: "world-elevation"//地形
        })

        //创建3D视图
        const view = new SceneView({
          container: this.$refs['dom'],
          map: map,
          center: [113.54766657989391, 22.76579858397575],
          // scale: 2070,
          camera: {
            position: {
              x: 12639861.409218187,
              y: 2602892.6764444276,
              z: 526.4768209708855,
              spatialReference: {wkid: 102100},//必要
            },
            tilt: 55,
            fov: 56,
            heading: 14
          },
          environment: {
            // background: {
            //   type: "color",
            //   color: [255, 252, 244, 1]
            // },
            // lighting: {
            //   date: Date.now(),
            //   directShadowsEnabled: true,
            //   ambientOcclusionEnabled: true
            // }
          }
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

      initTreeLayer(){

        const source = this.getData()
        const renderer = new SimpleRenderer({
          symbol : {
            type: "point-3d",
            symbolLayers: [{
              type: "object",
              resource: {
                href: `${process.env.BASE_URL}/static/gltf/Light_On_Post_-_Light_on.glb`,
              },
              material: { color: "red" },
              width: 5,
              height: 40,
              depth: 5,
            }]
          },
          // symbol: {
          //   type: "web-style",
          //   styleName: "esriRealisticTreesStyle",
          //   name: "Other"
          // },
          label: "tree",
          visualVariables: [{
          //   type: "size",
          //   field: "height",
          //   valueUnit: "feet"
          // },{
              type: "color",
              field: "storage", // Carbon storage
              stops: [
                {
                  value: 0,
                  color: "#f7fcb9"
                },
                {
                  value: 10000,
                  color: "#31a354"
                }
              ],
              legendOptions: {
                title: "storage"
              }
          }]

        });

        const layer = new FeatureLayer({
          title: "种树",
          id: "treeLayer",
          source:[],
          fields: [
            {name: "ObjectID", alias: "ObjectID", type: "oid"},
            {name: "title", alias: "title", type: "string"},
            {name: "height", alias: "height", type: "integer"},
            {name: "storage", alias: "storage", type: "integer"},
            {name: "lngLat", type: "string"},
          ],
          outFields: ['*'],
          objectIdField: "ObjectID",
          renderer,
          spatialReference: {
            wkid: 4326
          },
          geometryType: "point",//必要
          popupTemplate: {
            title: "{title}",
            content: [{
              type: "fields",
              fieldInfos: [{
                fieldName: "height",
                label: "高度",
                visible: false
              },{
                fieldName: "lngLat",
                label: '经纬度',
              }]
            }]
          },
        })
        this.map.add(layer)

        layer.applyEdits({addFeatures: source}).then(results => {
          console.log(`addFeatures:${results.addFeatureResults.length}`)
        })

      },

      getData(){

        const arr = [
          [113.54792137639583,22.76428599456751],
          [113.54765412242253,22.7645254364563],
          [113.54735692251681,22.764795140355677],
          [113.54702860471272,22.76506775836771],
          [113.54679495179647,22.765300693788106],
          [113.54646512296225,22.76559071514216],
          [113.54617641385929,22.765827763813054],
          [113.54593925816756,22.76606520027423],

          [113.54827733113964,22.764491562772694],
          [113.54796603753947,22.76473897646235],
          [113.54763653901325,22.765032958471586],
          [113.54732237877924,22.765279382463525],
          [113.54707593274021,22.76552142913973],
          [113.54678867579418,22.76580299973701],
          [113.54648139141185,22.76606877290851],
          [113.54620133835031,22.766407902370602],
        ]

        const graphics = []
        arr.forEach((lngLat) => {
          let graphic = new Graphic({
            //每个点的地理属性
            geometry: {
              type: "point",
              longitude: lngLat[0],
              latitude: lngLat[1],
              // longitude: lngLat[0] + Math.random() * 0.003 * (Math.random() > 0.5 ? 1 : -1),
              // latitude: lngLat[1] + Math.random() * 0.003 * (Math.random() > 0.5 ? 1 : -1),
              spatialReference: {wkid: 102100},
            },
            //每个点的属性
            attributes: {
              storage: 1000 + parseInt(5000 * Math.random()),
              height: 50 ,
              id: new Date().getTime(),
              lngLat: lngLat
            }
          })
          graphics.push(graphic)
        })

        return graphics
      },

      initBind() {

        this.view.on('click', (event) => {
          const {longitude, latitude} = event.mapPoint
          console.log(`[${[longitude, latitude]}]`)

        })
      }

    }
  }
</script>

<style lang="scss" scoped>

</style>