import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'
import route from 'vue-router'
import PinZhiXb from '../../components/index/PinZhiXB'
import ShangChangTK from '../../components/index/ShangChangTK'
import VIP from '../../components/index/VIP'
import Life from '../../components/index/Life'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(route)
export default [
  {
    path: '/',
    name: 'PinZhiXb',
    component: PinZhiXb
  },
  {
    path: '/21023303',
    name: 'ShangChangTK',
    component: ShangChangTK
  },
  {
    path: '/21023306',
    name: 'VIP',
    component: VIP
  },
  {
    path: '/21023307',
    name: 'Life',
    component: Life
  }
]
