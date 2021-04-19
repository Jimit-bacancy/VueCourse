<template>
  <div>
    <b-container>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card header-register">
            <div class="card-header display-4">Registration Form</div>
            <div class="card-body">
              <b-form class="form-horizontal">
                <div class="form-group">
                  <!-- <label for="fname" class="cols-sm-2 control-label"
                    >First Name</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-user fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.fname)}"
                        name="fname"
                        id="fname"
                        placeholder="Enter your First Name"
                        v-model.trim="fname"
                      />
                      <div class="invalid-feedback" v-if="!$v.fname.required">First Name is required.</div>
                    </div>
                  </div>
                   
                </div>
                
                <div class="form-group">
                  <!-- <label for="lname" class="cols-sm-2 control-label"
                    >Your LastName</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-user fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.lname)}"
                        name="lname"
                        id="lname "
                        placeholder="Enter your Last Name"
                        v-model.trim="lname"
                      />
                      <div class="invalid-feedback" v-if="!$v.lname.required">Last Name is required.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="gender" class="cols-sm-2 control-label"
                    >Gender</label
                  >
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-male fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-select class="form-control" name="gender" :class="{'is-invalid' : validationStatus($v.gender)}" v-model="gender">
                        <option value="" disabled selected>Choose gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Other</option>
                        <div class="invalid-feedback" v-if="!$v.gender.required">Gender is required.</div>
                      </b-form-select>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="email" class="cols-sm-2 control-label"
                    >Email</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-envelope fa" aria-hidden="true"> </i
                      ></span>
                      <b-form-input
                        type="email"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.email)}"
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        v-model.trim="email"
                      />
                      <div class="invalid-feedback" v-if="!$v.email.required">Email is required.</div>
                      <div class="invalid-feedback" v-if="!$v.email.email">Email is not valid.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="phone" class="cols-sm-2 control-label"
                    >Phone Number</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-phone fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="number"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.phone)}"
                        name="phone"
                        id="phone"
                        placeholder="Enter your Phone Number"
                        v-model.trim="phone"
                      />
                      <div class="invalid-feedback" v-if="!$v.phone.required">Phone number is required.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="password" class="cols-sm-2 control-label"
                    >Password</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-lock fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="password"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.password)}"
                        name="password"
                        id="password"
                        placeholder="Enter your Password"
                        v-model.trim="password"
                      />
                      <div class="invalid-feedback" v-if="!$v.password.required">Password is required.</div>
                      <div class="invalid-feedback" v-if="!$v.password.minLength">You must have at least {{ $v.password.$params.minLength.min }} letters of password</div>
                      <div class="invalid-feedback" v-if="!$v.password.maxLength">You must not have more than {{ $v.password.$params.maxLength.max }} letters of password</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="confirm" class="cols-sm-2 control-label"
                    >Confirm Password</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-lock fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="password"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.confirm)}"
                        name="confirm"
                        id="confirm"
                        placeholder="Confirm your Password"
                        v-model.trim="confirm"
                      />
                      <div class="invalid-feedback" v-if="!$v.confirm.sameAsPassword">Both password should be the same.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <b-button class="btn-block" variant="outline-primary" @click.prevent="submitForm1" pill>Next</b-button>
                </div>
                <!-- <navigation v-bind:on-click="submitForm1"></navigation> -->
              </b-form>
              
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
// import Navigation from './Navigation.vue';
import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
export default {
  components:{
    // Navigation
  },
  data() {
    return {
    };
  },
  computed: {
    fname:{
      get(){
        return this.$store.state.formdata.fname;
      },
      set(value){
        this.$store.commit('setFirstName',value);
      },
    },
    lname:{
      get(){
        return this.$store.state.formdata.lname;
      },
      set(value){
        this.$store.commit('setLastName',value);
      },
    },
    gender:{
      get(){
        return this.$store.state.formdata.gender;
      },
      set(value){
        this.$store.commit('setGender',value);
      },
    },
    email:{
      get(){
        return this.$store.state.formdata.email;
      },
      set(value){
        this.$store.commit('setEmail',value);
      },
    },
    phone:{
      get(){
        return this.$store.state.formdata.phone;
      },
      set(value){
        this.$store.commit('setPhone',value);
      },
    },
    password:{
      get(){
        return this.$store.state.formdata.password;
      },
      set(value){
        this.$store.commit('setPassword',value);
      },
    },
    confirm:{
      get(){
        return this.$store.state.formdata.confirm;
      },
      set(value){
        this.$store.commit('setConfirm',value);
      },
    },
  },
  validations: {
    fname: { required },
    lname: { required },
    gender: { required },
    email: { required, email },
    phone: { required },
    password: { required, minLength: minLength(4), maxLength: maxLength(10)},
    confirm: { sameAsPassword: sameAs('password') },
  },
  methods: {
    validationStatus(validation){
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submitForm1(){
      this.$v.$touch();
      if(this.$v.$pending || this.$v.$error) return;
      this.$router.push('/second');
    }
  },
};
</script>

<style scoped>
.header-register{
    background: linear-gradient(to left, rgba(116,235,213,0.6), rgba(159,172,230,0.6));
    padding: 20px 0;
}
</style>