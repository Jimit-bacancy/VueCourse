<template>
    <div>
        <h1>Filters & Mixins</h1>
            <hr>
            <input type="text" v-model="filteredText">
            <ul>
                <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
            </ul>
    </div>
</template>

<script>
import { fruitMixin } from './FruitMixins.js';
export default {
    mixins: [fruitMixin],
    created(){
        console.log('In List Created!');
    }
}
</script>

<style>

</style>
