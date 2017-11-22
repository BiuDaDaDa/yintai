import ShePin from '@/components/index/ShePin'
import { Navbar, TabItem, InfiniteScroll, Header, Popup } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Popup.name, Popup)
Vue.component(Header.name, Header)
export default [
  {
    path: '/21023304/:id?',
    name: 'ShePin',
    component: ShePin
  }
]
