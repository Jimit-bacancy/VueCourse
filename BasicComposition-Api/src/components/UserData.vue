<template>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
</template>

<script>
import { computed, inject, onBeforeMount, onBeforeUpdate, onUpdated } from 'vue';
export default {
    props: ['firstName', 'lastName'],
    setup(props){
        const uName = computed(function() {
            return props.firstName + ' ' + props.lastName;
        });
        const age = inject('userAge');
        onBeforeMount(function(){
            console.log('On Before Mount');
        })
        onBeforeUpdate(function(){
            console.log('On Before Update');
        })
        onUpdated(function(){
            console.log('On After Update');
        });
        return { userName: uName, age };
     
    }
    
    // computed:{
    //     userName(){
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // },
}
</script>