<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
    <normalized-counter></normalized-counter>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter';
import NormalizedCounter from './components/NormalizedCounter';
import UserAuth from './components/UserAuth';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    NormalizedCounter,
    UserAuth,
  },
  computed:{
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
        }
  },
  methods: {
    addOne(){
      // this.$store.state.counter++;
      //this.$store.commit('increment);
      this.$store.commit('increase',{ value: 10 });
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>