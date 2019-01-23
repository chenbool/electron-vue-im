import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Chat from '@/pages/Chat'
import LandingPage from '@/components/LandingPage'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/pages/Index').default
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },
    {
      path: '/land',
      name: 'land',
      component: LandingPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
