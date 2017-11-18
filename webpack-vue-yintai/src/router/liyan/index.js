import { Swipe, SwipeItem } from 'mint-ui'
import Vue from 'vue'
import route from 'vue-router'
import PinZhiXb from '../../components/index/PinZhiXB'
import ShangChangTK from '../../components/index/ShangChangTK'
import VIP from '../../components/index/VIP'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.use(route)
export default [
  {
    path: '/',
    name: 'PinZhiXb',
    component: PinZhiXb
    // children: [
    //   {
    //     path: 'ShangChangTK',
    //     component: ShangChangTK
    //   }
    // ]
  },
  {
    path: '/ShangChangTK',
    name: 'ShangChangTK',
    component: ShangChangTK
  },
  {
    path: '/VIP',
    name: 'VIP',
    component: VIP
  }
]
