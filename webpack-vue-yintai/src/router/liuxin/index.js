import Sales from '@/components/index/ShePin'
import Index from '@/components/index/YtIndex'
import { Navbar, TabItem, InfiniteScroll, Header, Popup } from 'mint-ui'
import Vue from 'vue'
Vue.use(InfiniteScroll)
Vue.component(Navbar.name, Navbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Popup.name, Popup)
Vue.component(Header.name, Header)
export default [
  {
    path: '/Sales/:id?',
    name: 'Sales',
    component: Sales
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]
