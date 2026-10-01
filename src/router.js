import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import SkillsView from './views/SkillsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'
import ThankYouView from './views/ThankYouView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/skills', name: 'skills', component: SkillsView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/gallery', redirect: '/#experience' },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/thank-you', name: 'thank-you', component: ThankYouView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }

    return { top: 0, behavior: 'smooth' }
  },
})

const titles = {
  home: 'Stephan Bennett | Software Developer',
  about: 'Stephan Bennett | About Me',
  skills: 'Stephan Bennett | Skills',
  projects: 'Stephan Bennett | Projects',
  contact: 'Contact | Portfolio',
  'thank-you': 'Message Sent | Stephan Bennett',
}

router.afterEach((to) => {
  document.title = titles[to.name] || titles.home
})

export default router
