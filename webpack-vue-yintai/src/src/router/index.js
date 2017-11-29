import Vue from 'vue'
import Router from 'vue-router'
import DuanRoutes from '@/router/duanyiwen'
import LiuRoutes from '@/router/liuxin'
import LuRoutes from '@/router/luhanran'
import LiRoutes from '@/router/liyan'

Vue.use(Router)

let newRoutes = DuanRoutes.concat(LuRoutes).concat(LiuRoutes).concat(LiRoutes)
export default new Router({
  mode: 'history',
  routes: newRoutes
})
