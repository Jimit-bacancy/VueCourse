import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    // idToken: null,
    // userId: null,
    // user: null,
    formdata:{
      fname: '',
      lname: '',
      gender: '',
      email: '',
      phone: '',
      password: '',
      confirm: '',
      institute: '',
      stream: '',
      cgpa: '',
      startdate: '',
      enddate: '',
    },
    totaldata: [],
  },
  mutations: {
    setFirstName(state, value){
      state.formdata.fname = value;
    },
    setLastName(state, value){
      state.formdata.lname = value;
    },
    setGender(state, value){
      state.formdata.gender = value;
    },
    setEmail(state, value){
      state.formdata.email = value;
    },
    setPhone(state, value){
      state.formdata.phone = value;
    },
    setPassword(state, value){
      state.formdata.password = value;
    },
    setConfirm(state, value){
      state.formdata.confirm = value;
    },
    setInstitute(state, value){
      state.formdata.institute = value;
    },
    setStream(state, value){
      state.formdata.stream = value;
    },
    setCgpa(state, value){
      state.formdata.cgpa = value;
    },
    setStartDate(state, value){
      state.formdata.startdate = value;
    },
    setEndDate(state, value){
      state.formdata.enddate = value;
    },
    storeFormData(state){
      // state.formdata = {...value};
      if(this.$route.params.id){
        axios.put(`https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/${this.$route.params.id}/.json`,
          state.formdata
          ).then((res)=>{
            console.log(res.data);
            alert("data editted");
          })
      }else{
        axios.post('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/.json', state.formdata)
        .then((res)=> {
          console.log(res.data);
        })
        .catch((err)=>{
          console.log(err);
        });
      }
      
    },
    getData(state){
      // if (this.$route.params.id) {
        axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
          // .get(
          //   `https://employeedetails-73030-default-rtdb.firebaseio.com/data/${this.$route.params.id}/.json`
          // )
          .then((res) => {
            state.totalData = res.data;
            console.log("Form Data = ",state.totalData);
          });
      // }
    },
    getFormData(state){
      // if(this.$route.params.id){
        // axios.get(`https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/${this.$route.params.id}/.json`)
        // axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
        // .then((res)=>{
        //   console.log("Response Data = ",res.data);
        //   // state.totaldata = res.data
        //   state.formdata = res.data;  
        //   console.log("Formdata = ",state.formdata);
        // })
        axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
          .then(res => {
            Object.keys(res.data).forEach(key => {
              res.data[key].uid = key;
              state.totaldata.push(res.data[key]);
            }
            )
            console.log("TotalData = ",state.totaldata[1]);
          })
      // }
    }, 
      // fetch('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json',{
      //   method: 'GET',        
      // }).then((res)=>{
      //     res.json()
      //   // console.log(state.totaldata);
      // }).then((data)=>{
      //   state.totaldata = data;
      //   console.log(data)
      //   console.log(state.totaldata);
      // })
    // authUser (state, userData) {
    //   state.idToken = userData.token
    //   state.userId = userData.userId
    // },
    // clearAuthData (state) {
    //   state.idToken = null
    //   state.userId = null
    //   state.user = null
    // },
  },
  actions: {
    storeFormData({commit}){
      commit('storeFormData');
    },
    getFormData({commit}){
      commit('getFormData');
    },
    getData({commit}){
      commit('getData');
    }
    // signup ({commit, dispatch}, authData) {
    //   axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBMPhMr23iv4k9-01FkYfHx2yAYAXemGYQ', {
    //     email: authData.email,
    //     password: authData.password,
    //     returnSecureToken: true
    //   })
    //     .then(res => {
    //       console.log(res)
    //       commit('authUser', {
    //         token: res.data.idToken,
    //         userId: res.data.localId
    //       })
    //       localStorage.setItem('token', res.data.idToken)
    //       localStorage.setItem('userId', res.data.localId)
    //       localStorage.setItem('email', res.data.email)
    //       dispatch('storeUser', authData)
       
    //       setTimeout(function () {
    //         router.push('/dashboard')
    //       }, 3000)
    //     })
    //     .catch(error => console.log(error))
    // }
  },
  modules: {
  }
})
