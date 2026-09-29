import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import GalleryView from './views/GalleryView.vue'
import ContactView from './views/ContactView.vue'
import ThankYouView from './views/ThankYouView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/projects', name: 'projects', component: ProjectsView },
  { path: '/gallery', name: 'gallery', component: GalleryView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/thank-you', name: 'thank-you', component: ThankYouView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

const titles = {
  home: 'Stephan Bennett | Software Developer',
  about: 'Stephan Bennett | About Me',
  projects: 'Stephan Bennett | Projects',
  gallery: 'Stephan Bennett | Gallery',
  contact: 'Contact | Portfolio',
  'thank-you': 'Message Sent | Stephan Bennett',
}

router.afterEach((to) => {
  document.title = titles[to.name] || titles.home
})

export default router
