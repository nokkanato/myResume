import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Skill from '@/components/Skill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
