<template>
<router-view v-slot="slotProps">
  <transition name="fade-button" mode="out-in">
    <component :is="slotProps.Component"></component>
  </transition>
</router-view>
  <!-- <div class="container">
    <list-data></list-data>
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
    <p v-if="paraisVisible">This is only sometimes visible...</p>
    </transition>
    <button @click="togglePara">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
    <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
    <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" v-bind:open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div> -->
</template>  

<script>
// import ListData from './components/ListData';
export default {
  // components: {
  //   ListData
  // },
  data() {
    return { 
      dialogIsVisible: false ,
      animatedBlock: false,
      paraisVisible: false,
      usersAreVisible: false
      };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock(){
      this.animatedBlock = true;
    },
    togglePara(){
      this.paraisVisible = !this.paraisVisible;
    },
    showUsers(){
      this.usersAreVisible = true;
    },
    hideUsers(){
      this.usersAreVisible = false;
    },
    beforeEnter(el){
      console.log("beforeEnter");
      console.log(el);
    },
    enter(el,done){
      console.log('enter');
      console.log(el);
      let round = 1;
      const interval = setInterval(function(){
        el.style.opacity = round * 0.01;
        round++;
        if(round > 100){
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el){
      console.log("afterEnter");
      console.log(el);
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.7s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform: translateX(-150px); */
  animation: slide-scale 0.7s ease-out forwards;
}
/* .v-enter-from{
  opacity: 0;
  transform: translateY(-30px);
} */

/*.v-enter-active{
  /* transition: all 0.5s ease-out; */
  /* animation: slide-scale 0.5s ease-out; */
/* } */ 

/* .v-enter-to{
  opacity: 1;
  transform: translateY(0);
} */

/* .v-leave-from{
  opacity: 1;
  transform: translateY(0);
} */
.v-leave-active{
  /* transition: all 0.5s ease-in; */
  animation: slide-scale 0.5s ease-out;
}
/* .v-leave-to{
  opacity: 0;
  transform: translateY(-30px);
} */

.fade-button-enter-from{
  opacity: 0;
}
.fade-button-enter-active{
  transition: opacity 0.5s ease-out;
}
.fade-button-enter-to{
  opacity: 1;
}
.fade-button-leave-from{
  opacity: 1;
}
.fade-button-leave-active{
  transition: opacity 0.5s ease-in;
}
.fade-button-leave-to{
  opacity: 0;
}

@keyframes slide-scale{
  0%{
    transform: translateX(0) scale(1);
  }
  70%{
    transform: translateX(-120px) scale(1.3);
  }
  100%{
    transform: translateX(-150px) scale(1);
  }
}
</style>