<template>
  <section class="container">
    <!-- <h2>{{ user.name }}</h2>
    <h3>{{ user.age }}</h3> -->
    <!-- <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3> -->
    <user-data :first-name="firstName" :last-name="lastName"></user-data>
    <button @click="setAge">Change Age</button>
    <div>
      <!-- <input type="text" placeholder="First Name" @input="setFirstName">
      <input type="text" placeholder="Last Name" @input="setLastName"> -->
      <input type="text" placeholder="First Name" v-model="firstName">
      <!-- <input type="text" placeholder="Last Name" v-model="lastName"> -->
      <input type="text" placeholder="Last Name" ref="lastNameInput">
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, watch, provide } from 'vue';
import UserData from './components/UserData';
// import { reactive, toRefs } from 'vue';
export default {
  components:{
    UserData,
  },
  setup() {
    // const uName = ref('Octane');
    let uAge = ref(24);
    const firstName = ref('');
    const lastName = ref('');
    const lastNameInput = ref(null);

    provide('userAge', uAge);
    // const user = reactive({
    //   name: 'Octane',
    //   age:  23,
    // });
    // function setFirstName(event){
    //   firstName.value = event.target.value;
    // }
    // function setLastName(event){
    //   lastName.value = event.target.value;
    // }
    // const uName = computed(function(){
    //   return firstName.value + " " + lastName.value;
    // });

    watch(uAge, function(newValue, oldValue){
      console.log('NewAge=' + newValue);
      console.log('OldAge=' + oldValue);
    });
    
    // setTimeout(() => {
    //   // uName.value = 'Octane Legends';
    //   // user.value.name = 'Octane Legends';
    //   // user.value.age = 24;
    //   user.name = 'Octane Legends';
    //   user.age = 24;
    // }, 3000);
    function setNewAge(){
      uAge.value++;
      // user.age++;
      // if(user.age > 30){
      //   user.age = 30;
      // }
    }
    function setLastName(){
      lastName.value = lastNameInput.value.value;
    }
    // const userRefs = toRefs(user);
    return { 
      // user: user, 
      // userName: userRefs.name,
      // userName: uName,
      // age: userRefs.age, 
      // age: uAge,
      setAge: setNewAge,
      // setFirstName,
      // setLastName,
      firstName,
      lastName,
      lastNameInput,
      setLastName,
    };
  },
  // data() {
  //   return {
  //     uname: 'Maximilian',
  //     uage: 30,
  //   };
  // },
  // methods: {
  //   changeAge(){
  //     this.uage--;
  //   }
  // },
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>