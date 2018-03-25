import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/routes/Main'
import SpaceshipsList from '@/components/routes/SpaceshipsList'
import Spaceships from '@/components/routes/Spaceships'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/spaceships/:id',
      name: 'spaceships',
      component: Spaceships
    },
    {
      path: '/spaceships/',
      name: 'spaceshipsList',
      component: SpaceshipsList
    }
  ]
})
