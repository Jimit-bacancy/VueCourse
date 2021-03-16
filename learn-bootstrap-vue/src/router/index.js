import Vue from 'vue'
import VueRouter from 'vue-router'
import Alert from '../views/Alert.vue'
import Carousel from '../views/Carousel.vue'
import Aspect from '../views/Aspect.vue'
import Avatar from '../views/Avatar.vue'
import Badges from '../views/Badges.vue'
import Buttons from '../views/Buttons.vue'
import Calender from '../views/Calender.vue'
import Card from '../views/Card.vue'
import Dropdown from '../views/Dropdown.vue'
import Form from '../views/Form.vue'
import Jumbotron from '../views/Jumbotron.vue'
import Media from '../views/Media.vue'
import Modal from '../views/Modal.vue'
import Navbar from '../views/Navbar.vue'
import Overlay from '../views/Overlay.vue'
import Pagination from '../views/Pagination.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'Alert', component: Alert},
  { path: '/slider', name: 'Carousel', component: Carousel}, 
  { path: '/aspect', name: 'Aspect', component: Aspect},
  { path: '/avatar', name: 'Avatar', component: Avatar},
  { path: '/badges', name: 'Badges', component: Badges},
  { path: '/button', name: 'Button', component: Buttons},
  { path: '/calender', name: 'Calender', component: Calender},
  { path: '/card', name: 'Card', component: Card},
  { path: '/dropdown', name: 'Dropdown', component: Dropdown},
  { path: '/form', name: 'Form', component: Form},
  { path: '/jumbotron', name: 'Jumbotron', component: Jumbotron},
  { path: '/media', name: 'Media', component: Media},
  { path: '/modal', name: 'Modal', component: Modal},
  { path: '/nav', name: 'Navbar', component: Navbar},
  { path: '/overlay', name: 'Overlay', component: Overlay},
  { path: '/page', name: 'Page', component: Pagination}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
