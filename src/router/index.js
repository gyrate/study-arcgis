import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// bugfix:两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/diyCluster',
  },{
    path: '/featureLayer',
    name: '显示海量点标记',
    component:()=> import(`@/views/UseFeatureLayer.vue`)
  },{
    path: '/cluster',
    name: '配置聚合功能',
    component:()=> import(`@/views/UseCluster.vue`)
  },{
    path: '/diyCluster',
    name: '自定义聚合函数',
    component:()=> import(`@/views/DiyCluster.vue`)
  }, {
    path: '/query',
    name: '图层查找功能',
    component: () => import(`@/views/QueryFeatureLayer.vue`)
  }, {
    path: '/polygon',
    name: '区域多边形',
    component: () => import(`@/views/PolygonLayer.vue`)
  }, {
    path: '/draw',
    name: '绘制覆盖物',
    component:()=> import(`@/views/DrawGeometry.vue`)
  }, {
    path: '/symbol3d',
    name: '绘制覆盖物',
    component: () => import(`@/views/Symbol3D.vue`)
  }
]

const router = new VueRouter({
  routes
})

export default router
