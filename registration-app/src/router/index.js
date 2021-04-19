import Vue from 'vue'
import VueRouter from 'vue-router'
import UserDetailsForm from '../components/UserDetailsForm.vue'
import UserEducationForm from '../components/UserEducationForm.vue'
// import UserDetails from '../components/UserDetails.vue';
import UserData from '../components/UserData.vue';
import UserEducationData from '../components/UserEducationData.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'first', component: UserDetailsForm },
  { path: '/second', name: 'second', component: UserEducationForm },
  // { path: '/details', name: 'details', component: UserDetails },
  { path: '/education', name: 'education', component: UserEducationData},
  { path: '/details', name: 'details', component: UserData },
  { path: '/logout', name: 'logout', redirect: '/', },
  { path: '/second/:id', name: 'second', component: UserEducationForm },
]

const router = new VueRouter({
  routes
})

export default router
