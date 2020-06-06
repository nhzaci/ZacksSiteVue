import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)
Vue.use(Meta)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/work',
    name: 'My Works',
    component: Work,
  },
  {
    path: '/contact',
    name: 'Contact Me',
    component: Contact,
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
