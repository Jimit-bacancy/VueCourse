import counterMutation from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

const counterModule = {
    state(){
        return {
            counter: 0,
        }
    },
    mutations: counterMutation,
    actions: counterActions,
    getters: counterGetters,
};

export default counterModule;


