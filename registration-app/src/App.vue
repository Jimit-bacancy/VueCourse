<template>
  <div id="app">
    <user-navbar></user-navbar>
    <br>
    <transition name="route" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import UserNavbar from './components/UserNavbar.vue';
export default {
  components:{
    UserNavbar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  min-height: 100vh;
  width: 100vw;
  /* background-image: url('');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.route-enter-from{
    opacity: 0;
    transform: translateY(-30px);
}
.route-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
.route-enter-active{
    transition: all 0.5s ease-out;
}
.route-leave-active{
    transition: all 0.5s ease-in;
}
.route-enter-to, .route-leave-from{
    opacity: 1;
    transform: translateY(0);
}
</style>
