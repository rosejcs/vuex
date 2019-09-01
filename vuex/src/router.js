import Vue from 'vue'
import Router from 'vue-router'
import Demo01 from './views/Demo01.vue'
import Demo02 from './views/Demo02.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Demo01',
      component: Demo01
    },
    {
      path:'/demo02',
      name:'Demo02',
      component: Demo02
    },
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
