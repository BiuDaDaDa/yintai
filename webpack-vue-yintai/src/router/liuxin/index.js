import Sales from '@/components/index/ShePin'
// import SalesProductList from '@/components/index/ShePinContent'
import Index from '@/components/index/YtIndex'
import ShoppingCar from '@/components/shoppingcar/ShoppingCar'
import ActivitiesTemplate from '@/components/index/YtActivitiesTemplate'
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
    path: '/Sales',
    name: 'Sales',
    component: Sales
    // children: [
    //   {
    //     path: '/SalesProductList',
    //     name: 'SalesProductList',
    //     components: SalesProductList
    //   }
    // ]
  },
  {
    path: '/',
    name: 'Index',
    component: Index
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
  }
]
