<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click.prevent="submit">Submit</button>
                <hr>
                <button class="btn btn-primary" @click.prevent="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="us in users" :key="us.id">{{ us.username }} - {{ us.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                email: '',
                username: '',   
            },
            users: [],
            resource: {},
        }
    },
    methods: {
        submit(){
            // console.log(this.user);
            // this.$http.post('https://vue2-http-2b61e-default-rtdb.firebaseio.com/data.json', this.user)
            //         .then(response => {
            //             console.log(response);
            //         }, error => {
            //             console.log(error);
            // });
            this.resource.saveAlt(this.user);
            this.user.email = '';
            this.user.username = '';
        },
        fetchData(){
            this.$http.get('https://vue2-http-2b61e-default-rtdb.firebaseio.com/data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        // console.log(data);
                        const resultArray = [];
                        for(let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
        }
    },
    created(){
        const customActions = {
            saveAlt: {method: 'POST', url: 'https://vue2-http-2b61e-default-rtdb.firebaseio.com/alternative.json'}
        };
        this.resource = this.$resource('https://vue2-http-2b61e-default-rtdb.firebaseio.com/data.json',
                    {}, customActions);
    },
}
</script>

<style>
</style>
