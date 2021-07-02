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
    redirect:'/featureLayer',
  },{
    path: '/featureLayer',
    name: '显示海量点标记',
    component:()=> import(`@/views/UseFeatureLayer.vue`)
  }
]

const router = new VueRouter({
  routes
})

export default router
