import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'
import route from 'vue-router'
import PinZhiXB from '../../components/index/PinZhiXB'
import ShangChangTK from '../../components/index/ShangChangTK'
import VIP from '../../components/index/VIP'
import Life from '../../components/index/Life'
import QiangXian from '../../components/limitbuy/QiangXian'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(route)
export default [
  {
    path: '/',
    name: 'PinZhiXB',
    component: PinZhiXB
  },
  {
    // path: '/21023303',
    path: '/ShangChangTK',
    name: 'ShangChangTK',
    component: ShangChangTK
  },
  {
    // path: '/21023306',
    path: '/VIP',
    name: 'VIP',
    component: VIP
  },
  {
    // path: '/21023307',
    path: '/Life',
    name: 'Life',
    component: Life
  },
  {
    path: '/QiangXian',
    name: 'QiangXian',
    component: QiangXian
  }
]
