<template>
    <div class="container">
        
            
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
            
            <hr>
            <input type="text" v-model="filteredText">
            <ul>
                <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
            </ul>
            <hr>
            <app-list></app-list>
        
    </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './FruitMixins.js';
export default {
    components:{
        AppList: List,
    },
    data() {
        return {
            text: 'Hello',
        }
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    mixins: [fruitMixin],
    created(){
        console.log('In App Created!');
    }
}
</script>

<style>

</style>
