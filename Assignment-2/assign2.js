const app = Vue.createApp({
    data(){
        return {
            name: '',
            confirmedName: ''
        };
    },
    methods:{
        buttonClick(){
            alert('Hello World');
        },
        setName(event){
            this.name = event.target.value;
        },
        confirmed(event){
            this.confirmedName = this.name;
        }
    }
});

app.mount('#assignment');