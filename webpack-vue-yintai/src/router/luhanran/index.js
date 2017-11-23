<<<<<<< HEAD
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import ForgetPassword from '@/components/ForgetPassword'
=======
import Login from '@/components/Login/Login'
import Registration from '@/components/Login/Registration'
import ForgetPassword from '@/components/Login/ForgetPassword'
import CateGory from '@/components/category/Fenlei'
import FenleiSearch from '@/components/category/FenleiSearch'
>>>>>>> 9a527c5aae3603af7ec1975c2670232852fc461b

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
<<<<<<< HEAD
=======
  },
  {
    path: '/CateGory',
    name: 'CateGory',
    component: CateGory
  },
  {
    path: '/FenleiSearch',
    name: 'FenleiSearch',
    component: FenleiSearch
>>>>>>> 9a527c5aae3603af7ec1975c2670232852fc461b
  }
]
