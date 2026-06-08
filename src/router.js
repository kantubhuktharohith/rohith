import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Skills from './pages/Skills.vue'
import Hackathons from './pages/Hackathons.vue'
import Projects from './pages/Projects.vue'

import Resume from './pages/Resume.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/hackathons', name: 'Hackathons', component: Hackathons },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/resume', name: 'Resume', component: Resume }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
