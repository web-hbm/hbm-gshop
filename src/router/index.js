import Vue from 'vue'
import Router from 'vue-router'

import Msite from '../pages/Msite/msite'
import Search from '../pages/Search/search'
import Order from '../pages/Order/order'
import Profile from '../pages/Profile/profile'
import Login from '../pages/Login/Login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    }]
})
