import SalesProductList from '@/components/sales/ShePinContent'
import Index from '@/components/index/YtIndex'
import ShoppingCar from '@/components/shoppingcar/ShoppingCar'
import ActivitiesTemplate from '@/components/sales/YtActivitiesTemplate'
import Nav from '@/components/common/YtRightNav'
import { Navbar, TabItem, InfiniteScroll, Header, Popup } from 'mint-ui'
import Vue from 'vue'
// import Mint from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Popup.name, Popup)
Vue.component(Header.name, Header)
export default [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/SalesProductList',
    name: 'SalesProductList',
    component: SalesProductList
  },
  {
    path: '/shoppingcar',
    name: 'ShoppingCar',
    component: ShoppingCar
  },
  {
    path: '/ActivitiesTemplate',
    name: ActivitiesTemplate,
    component: ActivitiesTemplate
  },
  {
    path: '/nav',
    name: 'Nav',
    component: Nav
  }
]
