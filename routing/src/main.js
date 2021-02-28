import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList';
import UsersList from './components/users/UsersList';
import TeamMembers from './components/teams/TeamMembers';
import PageNotFound from './components/nav/PageNotFound';
import TeamsFooter from './components/teams/TeamsFooter';
import UsersFooter from './components/users/UsersFooter';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // { path: '/', redirect: '/teams'},
        { name: 'teams', path: '/teams', 
            meta: { needsAuth: true},
            components: { default: TeamsList, footer: TeamsFooter }, 
            alias: '/', children: [
            { name: 'team-members', path: ':teamId', component:TeamMembers, props:true},
        ]},
        { path: '/users', components:{ default: UsersList, footer: UsersFooter },
                            beforeEnter: (to, from, next) => {
                                console.log('Users Roter level');
                                console.log(to, from);
                                next();
                            } },
        { path: '/:notFound(.*)', component: PageNotFound}
    ],
    scrollBehavior (to, from, savedPosition) {
        // console.log(to, from, savedPosition);
        if(savedPosition){
            return savedPosition;
        }else{
            return { left: 0, top: 0 };
        }
    }
});

// router.afterEach( function(to, from) {
//     //Used for sending analytics data
//     //Send data to server
//     console.log('Global afterEach');
//     console.log(to, from);
// })

router.beforeEach(function(to, from, next) {
    console.log('Global level');
    console.log(to, from);
    if(to.meta.needsAuth){
        console.log('Needs Auth!!');
        next();
    }else{
        next();
    }
})

const app = createApp(App)

app.use(router);

app.mount('#app'); 
