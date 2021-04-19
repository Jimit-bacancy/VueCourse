<template>
    <b-container>
        <user-data-table :totaldata.sync="totaldata"></user-data-table>
    </b-container>
</template>

<script>
import UserDataTable from './UserDataTable.vue';
export default {
    components:{
        UserDataTable,
    },
    data() {
        return {
            totaldata: [],
            // formdata: [
            //     {
            //         id: 1,
            //         fname: 'Abc',
            //         lname: 'Xyz',
            //         gender: 'male',
            //         email: 'abc@gmail.com',
            //         phone: '1234567890',
            //     },
            //     {
            //         id: 2,
            //         fname: 'Def',
            //         lname: 'Qwe',
            //         gender: 'female',
            //         email: 'def@gmail.com',
            //         phone: '0987654321',
            //     },
            //     {
            //         id: 3,
            //         fname: 'Xyz',
            //         lname: 'Zxc',
            //         gender: 'female',
            //         email: 'xyz@gmail.com',
            //         phone: '0987654312',
            //     },
            // ]
        }
    },
    methods: {
        getData(){
            this.$store.dispatch('getFormData');
        }
    },
    mounted(){
        this.getData();
    },
}
</script>