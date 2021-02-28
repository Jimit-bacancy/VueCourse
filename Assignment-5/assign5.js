const app = Vue.createApp({
    data(){
        return {
            tasks: [],
            enterValue: '',
            taskVisible: true
        };
    },
    methods:{
        addTasks(){
            this.tasks.push(this.enterValue);
            //console.log('Hii');
        },
        showhideTasks(){
            this.taskVisible = !this.taskVisible;
        },
        removeTasks(idx){
            this.tasks.splice(idx, 1);
        }
    },
    computed:{
        btnVisible(){
            if(this.taskVisible){
                return 'Hide List';
            }else{
                return 'Show List';
            }
        }
    }
});

app.mount('#assignment');