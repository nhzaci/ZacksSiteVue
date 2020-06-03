import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Zack\'s Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'Home page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        },
        {
          property: 'og:description',
          content: 'Home page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        }
      ]
    }
  },
  {
    path: '/work',
    name: 'My Works',
    component: Work,
    meta: {
      title: 'Zack\'s Work Page',
      metaTags: [
        {
          name: 'description',
          content: 'Work page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        },
        {
          property: 'og:description',
          content: 'Work page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact Me',
    component: Contact,
    meta: {
      title: 'Zack\'s Contact Page',
      metaTags: [
        {
          name: 'description',
          content: 'Contact page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        },
        {
          property: 'og:description',
          content: 'Work page of Zack\'s personal site, built with Vue.js and Vuetify.js'
        }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
