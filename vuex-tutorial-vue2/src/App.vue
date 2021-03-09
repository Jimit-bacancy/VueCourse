    <template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <!-- <app-result :counter="counter"></app-result> -->
                <app-result></app-result>
                <hr>
                <!-- <app-counter @updated="counter += $event"></app-counter> -->
                <app-counter></app-counter>
                <hr>
                <input type="text" :value="value" @input="updateValue">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        // data() {
        //     return {
        //         counter: 0
        //     }
        // },
        components: {
            appCounter: Counter,
            appResult: Result,
        },
        computed:{
            value: {
                get(){
                    return this.$store.getters.value;
                },
                set(value){
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        methods: {
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);
            }
        },
    }
</script>

