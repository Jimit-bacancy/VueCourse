<template>
    <section>
        <form @submit.prevent="submitData">
            <input type="text" placeholder="Enter Name" v-model="enteredName">
            <input type="text" placeholder="Enter Age" v-model="enteredAge">
            <button>Set Data</button>
        </form>
        
    </section>
</template>

<script>
export default{
    emits:['set-data'],
    data(){
        return {
            enteredName:'',
            enteredAge: '',
        };
    },
    methods:{
        submitData(){
            this.$emit('set-data',this.enteredName,this.enteredAge);
        }
    }
}
</script>