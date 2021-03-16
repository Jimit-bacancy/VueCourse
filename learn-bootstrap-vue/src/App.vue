<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Alert</router-link> |
      <router-link to="/slider">Carousel</router-link> | 
      <router-link to="/aspect">Aspect</router-link> |
      <router-link to="/avatar">Avatar</router-link> |
      <router-link to="/badges">Badges</router-link> |
      <router-link to="/button">Button</router-link> |
      <router-link to="/calender">Calender</router-link> |
      <router-link to="/card">Card</router-link> |
      <router-link to="/dropdown">Dropdown</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/jumbotron">Jumbotron</router-link> |
      <router-link to="/media">Media</router-link> |
      <router-link to="/modal">Modal</router-link> |
      <router-link to="/nav">Navbar</router-link> |
      <router-link to="/overlay">Overlay</router-link> |
      <router-link to="/page">Pagination</router-link> |
    </div>
    <transition name="route" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
