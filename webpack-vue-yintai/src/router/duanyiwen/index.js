import IndexScrollPd from '../../components/index/IndexScroll/IndexScrollPd.vue'
import IndexScrollShoes from '../../components/index/IndexScroll/IndexScrollShoes.vue'
import IndexScrollUnderwear from '../../components/index/IndexScroll/IndexScrollUnderwear.vue'
import IndexScrollChild from '../../components/index/IndexScroll/IndexScrollChild.vue'
import IndexScrollCrazy from '../../components/index/IndexScroll/IndexScrollCrazy.vue'
import IndexScrollMoneyOff from '../../components/index/IndexScroll/IndexScrollMoneyOff.vue'

export default [
  // 大图滚动盘点
  {
    path: '/IndexScrollPd',
    name: 'IndexScrollPd',
    component: IndexScrollPd
  },
  // 大图滚动鞋靴
  {
    path: '/IndexScrollShoes',
    name: 'IndexScrollShoes',
    component: IndexScrollShoes
  },
  // 大图滚动内衣
  {
    path: '/IndexScrollUnderwear',
    name: 'IndexScrollUnderwear',
    component: IndexScrollUnderwear
  },
  // 婴童
  {
    path: '/IndexScrollChild',
    name: 'IndexScrollChild',
    component: IndexScrollChild
  },
  // 疯狂购
  {
    path: '/IndexScrollCrazy',
    name: 'IndexScrollCrazy',
    component: IndexScrollCrazy
  },
  {
    path: '/IndexScrollMoneyOff',
    name: 'IndexScrollMoneyOff',
    component: IndexScrollMoneyOff
  }
]
