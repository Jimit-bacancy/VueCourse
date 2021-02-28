import mutations from './mutations';
import getters from './getters';
import actions from './actions';

export default {
    namespaced: true,
    state(){
        return {
            lastFetch: null,
            coaches: [
                {
                    id: 'c1',
                    firstName: 'Max',
                    lastName: 'Dom',
                    areas: ['frontend', 'backend', 'career'],
                    description: 'I am Max and I have worked as a freelance web developer for 10 years',
                    hourlyRate: 30,
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description: 'I am Julie and I have worked in a big tech company, I can help you to become a successful web developer',
                    hourlyRate: 40,
                }
            ],
        };
    },
    mutations: mutations,
    actions: actions,
    getters: getters
};