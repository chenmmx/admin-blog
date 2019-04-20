import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Home from '@/views/Home'
import Comment from '@/views/Comment'
import Users from '@/views/Users'
import Management from '@/views/Article/Management'
import Publish from '@/views/Article/Publish'
import Account from '@/views/System/Account'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'comment',
          component: Comment
        },
        {
          path: 'users',
          component: Users
        },
        {
          path: 'article/management',
          component: Management
        },
        {
          path: 'article/publish',
          component: Publish
        },
        {
          path: 'system/account',
          component: Account
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
