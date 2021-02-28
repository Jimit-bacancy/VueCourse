const app = Vue.createApp({
    data(){
        return {
            name: 'Octane',
            age: 20,
            imageLink: 'https://images.hdqwalls.com/download/best-nature-image-2560x1440.jpg'
        };
    },
    methods: {
        calculate(){
            const random = Math.random();
            return random;
        }
    }
});
app.mount('#assignment');