import Vue from 'vue'
import VueRouter from 'vue-router'
import Record from '@/views/record/Record'
// const Record = () => import('@/views/record/Record')
const Report = () => import('@/views/record/Report')
const Asset = () => import('@/views/asset/Asset')
const Discover = () => import('@/views/discover/Discover')
const Home = () => import('@/views//home/Home')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: '',
    redirect: '/record',
  },
  {
    path: '/record',
    name: 'record',
    component: Record,
  },
  {
    path: '/report',
    name: 'report',
    component: Report,
  },
  {
    path: '/asset',
    name: 'asset',
    component: Asset,
  },
  {
    path: '/discover',
    name: 'discover',
    component: Discover,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
]
// 解决 同一路由反复push报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'activeRoute',
})

export default router
