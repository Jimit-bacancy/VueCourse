const counterGetters = {
    finalCounter(state){
        return state.counter * 3;
    },
    normalizedCounter(_, getters){
        const normalizedCounter = getters.finalCounter;
        if(normalizedCounter < 0){
            return 0;
        }
        if(normalizedCounter > 100){
            return 100;
        }
        return normalizedCounter;
    }
}

export default counterGetters;