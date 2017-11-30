import IndexScrollOne from '../../components/index/indexScroll/IndexScrollOne.vue'
import IndexScrollThree from '../../components/index/indexScroll/IndexScrollThree.vue'
import IndexScrollFour from '../../components/index/indexScroll/IndexScrollFour.vue'
import IndexScrollFive from '../../components/index/indexScroll/IndexScrollFive.vue'
import YtIndexContent0 from '../../components/index/YtIndexContent0.vue'
import YtIndexContent2 from '../../components/index/YtIndexContent2.vue'
import Prd from '../../components/common/Product.vue'
import UserCollect from '../../components/Login/UserCollect.vue'
import HaveLogin from '../../components/Login/HaveLogin.vue'
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
    path: '/IndexScrollOne',
    name: 'One',
    component: IndexScrollOne
  },
  // 大图滚动3
  {
    path: '/IndexScrollThree',
    name: 'Three',
    component: IndexScrollThree
  },
  // 4
  {
    path: '/IndexScrollFour',
    name: 'Four',
    component: IndexScrollFour
  },
  // 5
  {
    path: '/IndexScrollFive',
    name: 'Five',
    component: IndexScrollFive
  },
  {
    path: '/prd',
    name: 'prd',
    component: Prd
  },
  {
    path: '/UserCollect',
    name: 'UserCollect',
    component: UserCollect
  },
  {
    path: '/HaveLogin',
    name: 'HaveLogin',
    component: HaveLogin
  }
]
