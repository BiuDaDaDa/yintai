import Login from '@/components/Login'
import Registration from '@/components/Registration'
import ForgetPassword from '@/components/ForgetPassword'

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
  }
]
