import { Swipe, SwipeItem, InfiniteScroll } from 'mint-ui'
import Vue from 'vue'
import route from 'vue-router'
import YtIndexContent3 from '../../components/index/YtIndexContent3'
import ShangChangTK from '../../components/index/ShangChangTK'
import VIP from '../../components/index/VIP'
import Life from '../../components/index/Life'
import QiangXian from '../../components/limitbuy/QiangXian'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(InfiniteScroll)

Vue.use(route)
export default [
  // 首页下半部分
  {
    path: '/YtIndexContent3',
    name: 'YtIndexContent3',
    component: YtIndexContent3
  },
  // 首页下商场同款页面
  {
    // path: '/21023303',
    path: '/ShangChangTK',
    name: 'ShangChangTK',
    component: ShangChangTK
  },
  // 首页下VIP页面
  {
    // path: '/21023306',
    path: '/VIP',
    name: 'VIP',
    component: VIP
  },
  // 首页下惠生活专区
  {
    // path: '/21023307',
    path: '/Life',
    name: 'Life',
    component: Life
  },
  // 首页下抢先页面专区
  {
    path: '/QiangXian',
    name: 'QiangXian',
    component: QiangXian
  }
]
