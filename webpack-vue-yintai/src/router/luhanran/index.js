import Login from '@/components/Login/Login'
import Registration from '@/components/Login/Registration'
import ForgetPassword from '@/components/Login/ForgetPassword'
import Fenlei from '@/components/category/Fenlei'
import FenleiSearch from '@/components/category/FenleiSearch'

export default [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Registration',
    name: '/Registration',
    component: Registration
  },
  {
    path: '/ForgetPassword',
    name: 'ForgetPassword',
    component: ForgetPassword
  },
  {
    path: '/Fenlei',
    name: 'Fenlei',
    component: Fenlei
  },
  {
    path: '/FenleiSearch',
    name: 'FenleiSearch',
    component: FenleiSearch
  }
]
