import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/routes/Main'
import List from '@/components/routes/List'
import Spaceship from '@/components/routes/Spaceship'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/spaceship/:id',
      name: 'Spaceship',
      components: Spaceship
    }
  ]
})
