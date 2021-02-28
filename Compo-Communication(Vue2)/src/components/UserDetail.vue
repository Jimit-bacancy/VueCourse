<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default{
    props: ['name', 'userAge'],
    methods: {
        resetName(){
            this.name = 'Max';
            this.$emit('nameIsReset', this.name);
        }
    },
    created(){
        eventBus.$on('ageIsEdited', (age) => {
            this.userAge = age;
        });
    },
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
