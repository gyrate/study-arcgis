<template>
  <div class="wrap">
    <div ref="dom" class="container"></div>
  </div>
</template>

<script>
  import axios from 'axios'

  import SpatialReference from '@arcgis/core/geometry/SpatialReference'
  import TileLayer from '@arcgis/core/layers/TileLayer'
  import MapImageLayer from '@arcgis/core/layers/MapImageLayer'
  import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
  import LabelClass from '@arcgis/core/layers/support/LabelClass'

  import Map from '@arcgis/core/Map'
  import MapView from '@arcgis/core/views/MapView'
  import LayerList from '@arcgis/core/widgets/LayerList'
  import Point from '@arcgis/core/geometry/Point'

  import Graphic from '@arcgis/core/Graphic'
  import GraphicsLayer  from '@arcgis/core/layers/GraphicsLayer'


  export default {
    name: "PolygonLayer",
    components: {},
    data() {
      return {}
    },
    mounted() {
      this.init()
      this.initGridLayer()
      this.bind()
    },
    methods: {
      init(){
        //创建地图
        const map = new Map({
          basemap: "hybrid" //卫星图
        })

        //创建2D视图
        const view = new MapView({
          container: this.$refs['dom'],
          map: map,
          zoom: 11,
          center: [113.51781466788616, 22.759990190213156],
          // scale: 288895
          // extent
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

      async initGridLayer(){

        const labelClass = new LabelClass({
          symbol: {
            type: 'text',
            color: '#fff',
            haloColor: "#3d83d1",
            haloSize: 1,
            font: { size: 12, weight: "bold"}
          },
          labelPlacement: 'above-center',
          labelExpressionInfo: {
            expression: `return $feature.name`
          }
        })

        const source = await this.getGridData()

        const layer = new FeatureLayer({
          id: 'grid',
          title: "网格图层",
          opacity: 1,
          fields:[{
            name: "ObjectID",
            type: "string"
          },{
            name: "name",
            type: "string"
          }],
          outFields: ["*"],
          objectIdField: "ObjectID",
          geometryType: "polygon",
          source: [],
          labelingInfo: [labelClass],
          popupTemplate:{
            title: '{name}'
          },
          renderer : {
            type: "simple",
            symbol: {
              type: "simple-fill",
              size: 12,
              color: [57,100,240,0.5],
              outline: {
                width: 1,
                color: "white"
              }
            }
          }
        })
        this.map.add(layer)

        layer.applyEdits({addFeatures: source}).then(results => {
          console.log(`deleteFeatures:${results.deleteFeatureResults.length}`)
          console.log(`addFeatures:${results.addFeatureResults.length}`)
        })
      },

      getGridData(){

        return new Promise(resolve=>{

          axios.get(`${process.env.BASE_URL}/static/nansha.json`).then(res => {
            const arr = []

            res.data.data[0].features.forEach(item => {

              let graphic = new Graphic({
                geometry: {
                  type: "polygon",
                  rings: item.geometry.coordinates,
                },
                symbol: {
                  type: "simple-fill",
                  color: [122, 172, 255, 0.3],
                  style: "solid",
                  outline: {
                    color: '#284bff',
                    width: 2,
                    style: 'solid'
                  }
                },
                attributes: {
                  name: item.properties.name
                },
                popupTemplate: {
                  title: 'polygon'
                }
              })
              arr.push(graphic)

            })
            resolve(arr)
          })

        })
      },


      bind(){

        var highlight = null
        var currTown = null

        this.view.on("pointer-move", (event) => {

          this.view.hitTest(event).then((res) => {

            const results = res.results
            const graphic = results.length ? results[0].graphic : null

            if (graphic && graphic.sourceLayer && graphic.sourceLayer.id == 'grid') {

              if (currTown == graphic.attributes.name) {
                return
              }
              if (highlight) {
                highlight.remove()
              }
              this.view.whenLayerView(graphic.layer).then((layerView) => {
                highlight = layerView.highlight(graphic)
                currTown = graphic.attributes.name
              })
            } else {

              if (highlight) {
                highlight.remove()
                highlight = null
                currTown = null
              }
            }

          })

        })


        this.view.on('click', (event) => {
          const {longitude, latitude} = event.mapPoint
          console.log(`[${[longitude, latitude]}]`)

          //平移到点
          this.view.goTo({
            center: new Point({
              x: longitude,
              y: latitude
            }),
            zoom: 13
          }).then(()=>{

            console.log('平移')
          })

        })

      },

    }
  }
</script>

<style lang="scss" type="text/scss">

</style>
