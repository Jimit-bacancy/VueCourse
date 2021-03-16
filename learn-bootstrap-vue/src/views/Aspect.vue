<template>
    <b-container>

        <b-button @click="changeAspect('2:1')" class="mr-2">2:1</b-button>
        <b-button @click="changeAspect('4:3')" class="mr-2">4:3</b-button>
        <b-button @click="changeAspect('16:9')" class="mr-2">16:9</b-button>
        <hr/>

        <b-aspect :aspect="aspect" style="border: 1px solid black;">
            Aspect = {{ aspect }}
        </b-aspect>
        <hr>

        <b-row>
            <b-col>
                <b-aspect :aspect="aspect" style="border: 1px dashed red;">Aspect = {{ aspect }}</b-aspect>
            </b-col>
            <b-col>
                <b-aspect :aspect="aspect" style="border: 1px dashed green;">Aspect = {{ aspect }}</b-aspect>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    data() {
        return {
            aspect: '2:1',
        }
    },
    methods: {
        changeAspect(value){
            this.aspect = value;
        }
    },
}
</script>