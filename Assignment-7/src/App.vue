<template>
  <div>
  <h2>My Course Goal</h2>
  <!-- <h3 v-if="toggleButton">{{ goals}}</h3>-->
  <!-- <h3 v-if="goalIsVisible">{{ goal }}</h3> -->
  <!-- <h3 v-if="courseData.goalIsVisible">{{ goal }}</h3> -->
  <h3 v-if="courseData.goalIsVisible">{{ goal }}</h3>
  <button @click="toggleGoals">Toggle Goal</button>
  </div>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  // data() {
  //   return {
  //     goals: ['Learn JS', 'Learn Vue', 'Master JS', 'Master Vue'],
  //     toggleButton: false,
  //   }
  // },
  // methods:{
  //   toggleGoals(){
  //     this.toggleButton = !this.toggleButton;
  //   }
  // },
  setup() {
    // const courseGoal = ref('Finish the Course');
    // const goalIsVisible = ref(false);
    // const courseData = ref({
    //   goal: 'Finish Vue',
    //   goalIsVisible: false,
    // });
    const courseData = reactive({
      goal: 'Finish Course!', 
      goalIsVisible: false,
    });

    function toggleGoals(){
      // goalIsVisible.value = !goalIsVisible.value;
      // courseData.value.goalIsVisible = !courseData.value.goalIsVisible;
      courseData.goalIsVisible =  !courseData.goalIsVisible;
    }
    // return { goal: courseGoal, goalIsVisible: goalIsVisible, toggleGoals: toggleGoals};
    // return { 
    //   goal: courseData.value.goal, 
    //   courseData,
    //   toggleGoals,
    // };
    return { goal: courseData.goal, courseData, toggleGoals, };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
