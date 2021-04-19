<template>
    <b-container>
        <user-education :formdata="formdata"></user-education>
    </b-container>
</template>

<script>
import UserEducation from './UserEducation.vue';
export default {
    components:{
        UserEducation,
    },
    data() {
        return {
            formdata: [
                {
                    id: 1,
                    fname: 'Abc',
                    lname: 'Xyz',
                    institute: 'GTU',
                    branch: 'IT',
                    cgpa: 8.45,
                    startdate: '8-5-2016',
                    enddate: '8-6-1019'
                },
                {
                    id: 2,
                    fname: 'Def',
                    lname: 'Qwe',
                    institute: 'GTU',
                    branch: 'CE',
                    cgpa: 8.78,
                    startdate: '8-5-2017',
                    enddate: '8-6-1020'
                },
                {
                    id: 3,
                    fname: 'Xyz',
                    lname: 'Zxc',
                    institute: 'GTU',
                    branch: 'IT',
                    cgpa: 8.97,
                    startdate: '8-5-2016',
                    enddate: '8-6-1019'
                },
            ]
        }
    },
}
</script>