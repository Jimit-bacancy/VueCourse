<template>
  <div>
  <button @click="confirmedInput">Go to Teams</button>
  <button v-on:click="saveChanges">Save Changes</button>
  </div>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmedInput(){
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved = true;
    }
  },
  beforeRouteEnter (to, from, next) {
       console.log('UsersList Component Level before route enter');
       console.log(to, from);
       next();
  },
  beforeRouteLeave (to, from, next) {
    console.log('UsersList before Route Leave');
    console.log(to, from);
    if(this.changesSaved){
      next();
    }else{
      const userWantstoLeave = confirm('Are you sure? You got unsaved changes!!');
      next(userWantstoLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}

div{
  display: flex;
  justify-content: center;
  align-items: center;
}

button{
  cursor: pointer;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px solid red;
  background-color: blue;
  color: white;
}
button:hover{
  border: 3px solid yellow;
  background-color: lightgreen;
  color: green;
}
</style>