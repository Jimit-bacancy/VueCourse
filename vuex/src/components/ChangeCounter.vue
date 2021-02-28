<template>
    <!-- <button @click="addOne">Add 1</button> -->
    <button @click="increment">Add 1</button>
    <button @click="increase({ value: 11 })">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne(){
        //     // this.$store.state.counter = this.$store.state.counter + 1;
        //     // this.$store.commit('increment');
        //     this.$store.dispatch({
        //         type: 'increment',
        //     });
        // }
        ...mapActions(['increment','increase'])
    },
}
</script>