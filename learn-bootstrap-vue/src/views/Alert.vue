<template>
  <div class="home">
    <b-button variant="success">Hello World</b-button>
    <hr>
    <b-container>
      <b-alert show>Default Alert</b-alert>
      <hr>
      
      <b-alert show variant="danger">Danger Alert</b-alert>
      <hr>
      
      <b-alert show variant="warning">Warning Alert</b-alert>
      <hr>
      
      <b-alert :show="successShow" variant="success">Success Alert without fade</b-alert>
      <b-alert :show="successShow" fade variant="success">Success Alert with fade</b-alert>
      <span @click="toggleSuccessAlert" style="cursor: pointer;">Toggle Success Alert</span>
      <hr>

      <b-alert show variant="danger" dismissible>Danger alert with dismissible.</b-alert>
      <hr>

      
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Alert',
  components: {
    // HelloWorld
  },
  data() {
    return {
      successShow: false,
    }
  },
  methods: {
    toggleSuccessAlert(){
      this.successShow = !this.successShow;
    }
  },
}
</script>
