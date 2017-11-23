import IndexScrollPd from '../../components/index/IndexScroll/IndexScrollPd.vue'
import IndexScrollShoes from '../../components/index/IndexScroll/IndexScrollShoes.vue'
import IndexScrollUnderwear from '../../components/index/IndexScroll/IndexScrollUnderwear.vue'
import IndexScrollChild from '../../components/index/IndexScroll/IndexScrollChild.vue'
import IndexScrollCrazy from '../../components/index/IndexScroll/IndexScrollCrazy.vue'
import IndexScrollMoneyOff from '../../components/index/IndexScroll/IndexScrollMoneyOff.vue'
import YtIndexContent0 from '../../components/index/YtIndexContent0.vue'
import YtIndexContent2 from '../../components/index/YtIndexContent2.vue'
import Prd from '../../components/common/Product.vue'

export default [
  // 大图滚动
  {
    path: '/IndexScroll',
    name: 'IndexScroll',
    component: YtIndexContent0
  },
  {
    path: '/YtIndexContent2',
    name: 'YtIndexContent2',
    component: YtIndexContent2
  },
  // 大图滚动1
  {
    path: '/IndexScrollPd',
    name: 'IndexScrollPd',
    component: IndexScrollPd
  },
  // 大图滚动2
  {
    path: '/IndexScrollShoes',
    name: 'IndexScrollShoes',
    component: IndexScrollShoes
  },
  // 大图滚动3
  {
    path: '/IndexScrollUnderwear',
    name: 'IndexScrollUnderwear',
    component: IndexScrollUnderwear
  },
  // 4
  {
    path: '/IndexScrollChild',
    name: 'IndexScrollChild',
    component: IndexScrollChild
  },
  // 5
  {
    path: '/IndexScrollCrazy',
    name: 'IndexScrollCrazy',
    component: IndexScrollCrazy
  },
  {
    path: '/IndexScrollMoneyOff',
    name: 'IndexScrollMoneyOff',
    component: IndexScrollMoneyOff
  },
  // 6
  {
    path: '/prd',
    name: 'prd',
    component: Prd
  }
]
