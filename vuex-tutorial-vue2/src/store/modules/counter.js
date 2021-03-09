const state = {
    counter: 0
};

const getters = {
    doubleCounter(state){
        return state.counter * 2;
    },
    stringCounter(state){
        return state.counter + ' clicks';
    }, 
}

const mutations = {
    increment(state, payload){
        state.counter += payload;
    },
    decrement(state){
        state.counter--;
    },   
}

const actions = {
    increment(context, payload){
        context.commit('increment', payload);
    },
    decrement: ({ commit }) => {
        commit('decrement');
    },
    asyncIncrement: ({ commit }) => {
        setTimeout(() =>{
            commit('increment');
        },1000);
    },
    asyncDecrement: ({ commit }) => {
        setTimeout(() =>{
            commit('decrement');
        },1000);
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}