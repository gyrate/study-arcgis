<template>
  <div id="app">
    <FeatureLayer />
  </div>
</template>

<script>
import FeatureLayer from './components/FeatureLayer.vue'

export default {
  name: 'App',
  components: {
    FeatureLayer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
