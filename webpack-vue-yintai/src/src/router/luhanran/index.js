import Login from '@/components/Login/Login'
import Registration from '@/components/Login/Registration'
import ForgetPassword from '@/components/Login/ForgetPassword'
import CateGory from '@/components/category/Fenlei'
import FenleiSearch from '@/components/category/FenleiSearch'

export default [
  {
    path: '/userinfo',
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
    path: '/CateGory',
    name: 'CateGory',
    component: CateGory
  },
  {
    path: `/FenleiSearch`,
    name: 'FenleiSearch',
    component: FenleiSearch
  }
]
