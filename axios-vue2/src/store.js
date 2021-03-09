import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
import globalAxios from 'axios';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null,
  },

  mutations: {
    authUser(state, userData){
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user){
      state.user = user;
    },
    clearAuthData(state){
      state.idToken = null;
      state.userId = null;
    }
  },

  actions: {
    setLogoutTimer({commit}, expirationTime){
      setTimeout(() => {
        commit('clearAuthData');
        // context.dispatch('logout');
      }, expirationTime * 1000);
    },
    signup(context, authData){
      axios.post('/accounts:signUp?key=AIzaSyDgLv39O35vtTMr0SM6I_ER18EpDsv4Xek', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
          .then((res) => {
            console.log(res);
            context.commit('authUser', {
              token: res.data.idToken,
              userId: res.data.localId,
            });
            const now = new Date();
            const expirationDate = new Date(now.getTime() + (res.data.expiresIn * 1000));
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.userId);
            context.dispatch('storeUser', authData);
            context.dispatch('setLogoutTimer', res.data.expiresIn);
          })
          .catch((err) => {
            console.log(err);
            console.log('Hi');
          });
    },
    login(context, authData){
      axios.post('/accounts:signInWithPassword?key=AIzaSyDgLv39O35vtTMr0SM6I_ER18EpDsv4Xek', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true,
      })
      .then(res => {
          console.log(res);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + (res.data.expiresIn * 1000));
          localStorage.setItem('token', res.data.idToken);
          localStorage.setItem('expirationDate', expirationDate);
          localStorage.setItem('userId', res.data.localId);
          context.commit('authUser',{
          token: res.data.idToken,
          userId: res.data.localId,
        });
        context.dispatch('setLogoutTimer', res.data.expiresIn);
      })
      .catch(err => console.log(err))
    },
    tryAutoLogin({commit}){
      const token = localStorage.getItem('token');
      if(!token){
        return;
      }
      const expirationDate = localStorage.getItem('expirationDate');
      const now = new Date();
      if(now >= expirationDate){
        return;
      }
      const userId = localStorage.getItem('userId');
      commit('authUser', {
        token: token,
        userId: userId,
      });
    },
    storeUser({commit, state}, userData){
      if(!state.idToken){
        return;
      }
      globalAxios.post('/users.json' + '?auth = ' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(err => console.log(err)) 
    },
    fetchUser({commit, state}){
      if(!state.idToken){
        return;
      }
      globalAxios.get('/users.json' + '?auth = ' + state.idToken)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for(let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          // this.email = users[0].email;
          commit('storeUser', users[0]);
        })
        .catch(err => console.log(err));
    },
    logout({commit}){
      commit('clearAuthData');
      localStorage.removeItem('expirationDate');
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      router.replace('/signin');
    },
  },

  getters: {
    user(state){
      return state.user;
    },
    isAuthenticated(state){
      return state.idToken !== null
    }
  }
})