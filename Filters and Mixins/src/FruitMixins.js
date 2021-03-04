export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banana', 'Mango', 'Orange'],
            filteredText: '',
        }
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filteredText);
            });
        }
    },
    created() {
        console.log('In mixin created');
    },
};