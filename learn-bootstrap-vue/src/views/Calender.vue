<template>
    <b-container>
        <b-row>
            <b-col md="auto">
                <b-calendar v-model="selectedDate" @context="onContext" locale="en-US"></b-calendar>
            </b-col>
            <b-col>
                <p>Value: <code>{{ selectedDate }}</code></p>
                <p class="mb-0">context</p>
                <pre class="sm">{{ content }}{</pre>
            </b-col>
        </b-row>
        <hr>

        <b-button-group>
            <b-button class="mr-2">Button 1</b-button>
            <b-dropdown class="mr-2" right text="Button 2">
                <b-dropdown-item>Item 1</b-dropdown-item>
                <b-dropdown-item>Item 2</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-calendar v-model="selectedDate" @context="onContext" locale="en-US"></b-calendar>
            </b-dropdown>
            <b-button class="mr-2">Button 3</b-button>
        </b-button-group>
        <hr>

        <b-calendar block locale="en-IN" v-model="value" :date-info-fn="dateClass"></b-calendar>        

    </b-container>
</template>

<script>
export default {
    data() {
        return {
            selectedDate: '',
            content: null,
            value: '',
        }
    },
    methods: {
        onContext(ctx){
            this.content = ctx;
        },
        dateClass(ymd, date){
            const day = date.getDate();
            const month = date.getMonth();
            let text = '' ;
            if(day >= 1 && day <= 10 && month >= 5 && month < 7){
                text = 'table-warning';
            }
            else if(day > 10 && day <= 20){
                text = 'table-info';
            }
            else{
                text = 'table-danger';
            }
            return text;
        }
    },
}
</script>