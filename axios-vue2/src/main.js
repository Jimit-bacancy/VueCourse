import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://axios-vue2-e2bcf-default-rtdb.firebaseio.com';

axios.interceptors.request.use(config => {
  console.log('Request Interceptor', config);
  return config;
});

axios.interceptors.request.use(res => {
  console.log('Response Interceptor', res);
  return res;
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
