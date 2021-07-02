<template>
  <div class="wrap">
    <div ref="dom" class="container"></div>

  </div>
</template>

<script>

  import Map from '@arcgis/core/Map';
  import Graphic from '@arcgis/core/Graphic';
  import LayerList from '@arcgis/core/widgets/LayerList'
  import MapView from '@arcgis/core/views/MapView';

  import GraphicsLayer  from '@arcgis/core/layers/GraphicsLayer';
  import Sketch from '@arcgis/core/widgets/Sketch'

  export default {
    name: "DrawGeometry",
    components: {},
    data() {
      return {}
    },
    mounted() {
      this.init()
      this.initDraw()
    },
    methods: {
      init(){
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
      initDraw(){

        //绘图工具
        const drawlayer = new GraphicsLayer({
          id: 'canvas',
          title: '绘制面板'
        })
        this.map.add(drawlayer)
        const sketch = new Sketch({
          layer:drawlayer,
          view: this.view,
          creationMode: 'update'
        })
        this.view.ui.add(sketch, 'top-right')
        sketch.on('update', (event) => {

          if(event.graphics[0].geometry){

            const geometry = event.graphics[0].geometry
            var msg  = ''

            switch(geometry.type){
              case 'point':
                msg = `x:${geometry.x}, y:${geometry.y}`
                break;
              case 'polyline':
                msg = JSON.stringify(geometry.paths)
                break;
              case 'polygon':
                msg = JSON.stringify(geometry.rings)
                break;
            }

            console.log(msg)

          }
        })
        this.sketch = sketch

      },
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>
