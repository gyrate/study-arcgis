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

  export default {
    name: 'Symbol3D',
    components: {},
    data() {
      return {}
    },
    mounted() {
      this.init()
      this.initSymbol3DLayer()
      this.initBind()
    },
    methods: {
      init(){
        //创建地图
        const map = new Map({
          basemap: "hybrid", //卫星图
          // ground: "world-elevation"//地形
        })

        //创建3D视图
        const view = new SceneView({
          container: this.$refs['dom'],
          map: map,
          // scale: 2070,
          // center: [113.54375991009947, 22.784198925484382],
          center: [-82.44177353410794,35.61000099349824],
          camera: {
            position: {
              x: -9177287.301365132,
              y: 4246894.071916947,
              z: 315.51049539633095,
              spatialReference: {wkid: 102100},//必要
            },
            tilt: 45.43021646035824,
            fov: 55,
            heading: 353
          },
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

      initSymbol3DLayer(){

        const renderer = {
          type: "simple", // autocasts as new SimpleRenderer()
          // symbol: {
          //   type: "web-style", // autocasts as new WebStyleSymbol()
          //   styleName: "esriRealisticTreesStyle",
          //   name: "Other"
          // },
          symbol : {
            type: "point-3d",
            symbolLayers: [{
              type: "object",
              resource: {
                href: `${process.env.BASE_URL}/static/gltf/tree.glb`,
              },
              height: 10,
              material: {
                color: "red"
              }
            }]
          },
          label: "tree",
          visualVariables: [
            {
              type: "size",
              axis: "height",
              field: "Height", // tree height
              valueUnit: "feet"
            },
            {
              type: "color",
              field: "C_Storage", // Carbon storage
              stops: [
                {
                  value: 0,
                  color: "#f7fcb9"
                }, // features with zero carbon
                {
                  value: 10000,
                  color: "#31a354"
                } // features with 800 carbon
              ],
              legendOptions: {
                title: "Carbon Storage"
              }
            }
          ]
        };

        const layer = new FeatureLayer({
          id: 'trees',
          url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
          renderer: renderer,
          fields: [
            {
              name: 'Height',
              type: 'integer'
            },{
              name: 'C_Storage',
              type: 'integer'
            }
          ],
          outFields:['*'],
          popupTemplate:{
            title: '{Height}'
          },
          source: []
        })
        this.map.add(layer)

        // const source = this.getData()
        // layer.applyEdits({addFeatures: source}).then(results => {
        //   console.log(`addFeatures:${results.addFeatureResults.length}`)
        // })
      },


      getData(){

        const lngLat = [-82.44284792465882,35.611569122578985]
        const graphics = []
        for (let i = 0; i < 10; i++) {

          let graphic = new Graphic({
            //每个点的地理属性
            geometry: {
              type: "point",
              longitude: lngLat[0] + Math.random() * 0.1,
              latitude: lngLat[1] + Math.random() * 0.1,
              spatialReference: {wkid: 102100},
            },
            //每个点的属性
            attributes: {
              Height: 50,
              C_Storage: parseInt(10000 * Math.random()),
              id: new Date().getTime()
            }
          })
          graphics.push(graphic)
        }
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