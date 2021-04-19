<template>
    <b-container>
        <b-button class="btn btn-success" @click="isShow = true">
            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
        </b-button>
        <br>
        <div class="row justify-content-center"  v-if="isShow" @close="isShow = false">
        <div class="col-md-8">
          <div class="card header-register">
            <div class="card-header display-4">Add more details</div>
            <div class="card-body">
              <b-form class="form-horizontal" method="post">
                <div class="form-group">
                  <!-- <label for="institute" class="cols-sm-2 control-label"
                    >Institute / School name</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-university fa" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.institute)}"
                        name="institute"
                        id="institute"
                        placeholder="Enter your school/ university name"
                        v-model.trim="institute"
                        required
                      />
                      <div class="invalid-feedback" v-if="!$v.institute.required">Institute Name is required.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="stream" class="cols-sm-2 control-label"
                    >Your LastName</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-graduation-cap" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="text"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.stream)}"
                        name="stream"
                        id="stream"
                        placeholder="Enter your stream"
                        v-model.trim="stream"
                        required
                      />
                      <div class="invalid-feedback" v-if="!$v.stream.required">Stream is required.</div>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <!-- <label for="cgpa" class="cols-sm-2 control-label"
                    >Email</label
                  > -->
                  <div class="cols-sm-10">
                    <div class="input-group align-items-center">
                      <span class="input-group-addon"
                        ><i class="fa fa-percent fa-lg" aria-hidden="true"></i
                      ></span>
                      <b-form-input
                        type="number"
                        class="form-control"
                        :class="{'is-invalid' : validationStatus($v.cgpa)}"
                        name="cgpa"
                        id="cgpa"
                        placeholder="Enter CGPA"
                        v-model.trim="cgpa"
                        required
                      />
                      <div class="invalid-feedback" v-if="!$v.cgpa.required">CGPA is required.</div>
                      <!-- <div class="invalid-feedback" v-if="!$v.cgpa.minLength">You must have at least {{ $v.cgpa.$params.minLength.min }} CGPA.</div>
                      <div class="invalid-feedback" v-if="!$v.cgpa.maxLength">You can not enter more than {{ $v.cgpa.$params.maxLength.max }} CGPA.</div> -->
                    </div>
                  </div>
                </div>
                <div class="form-row">
                    <div class="form-group text-center col-md-6">
                    <label for="startdate" class="cols-sm-2 control-label"
                        >Start Date</label
                    >
                    <div class="cols-sm-10">
                        <div class="input-group align-items-center">
                        <span class="input-group-addon"
                            ><i class="fa fa-calendar fa-lg" aria-hidden="true"></i
                        ></span>
                            <b-form-input
                            type="date"
                            class="form-control"
                            :class="{'is-invalid' : validationStatus($v.startdate)}"
                            name="startdate"
                            id="startdate"
                            v-model.trim="startdate"
                            required
                          />
                          <div class="invalid-feedback" v-if="!$v.startdate.required">Please select start-date.</div>
                        </div>
                    </div>
                    </div>
                    <div class="form-group text-center col-md-6">
                    <label for="enddate" class="cols-sm-2 control-label"
                        >End Date</label
                    >
                    <div class="cols-sm-10">
                        <div class="input-group align-items-center">
                        <span class="input-group-addon"
                            ><i class="fa fa-calendar fa-lg" aria-hidden="true"></i
                        ></span>
                            <b-form-input
                            type="date"
                            class="form-control"
                            :class="{'is-invalid' : validationStatus($v.enddate)}"
                            name="enddate"
                            id="enddate"
                            v-model.trim="enddate"
                            required
                          />
                          <div class="invalid-feedback" v-if="!$v.enddate.required">Please select end-date.</div>
                        </div>
                    </div>
                    </div>
                </div>
                  <b-button class="btn btn-outline-primary text-white mr-2" block pill @click.prevent="btnPrevious">Previous</b-button>
                  <b-button class="btn btn-success text-white mr-2" block pill @click.prevent="submitForm">Register</b-button>
                  <!-- <navigation></navigation> -->
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </b-container>
</template>

<script>
// import Navigation from './Navigation.vue';
import { required } from 'vuelidate/lib/validators';
export default {
    components:{
        // Navigation,
    },
    data() {
        return {
            isShow: false,
        }
    },
    computed: {
      institute:{
        get(){
          return this.$store.state.formdata.institute;
        },
        set(value){
          this.$store.commit('setInstitute',value);
        },
      },
      stream:{
        get(){
          return this.$store.state.formdata.stream;
        },
        set(value){
          this.$store.commit('setStream',value);
        },
      },
      cgpa:{
        get(){
          return this.$store.state.formdata.cgpa;
        },
        set(value){
          this.$store.commit('setCgpa',value);
        },
      },
      startdate:{
        get(){
          return this.$store.state.formdata.startdate;
        },
        set(value){
          this.$store.commit('setStartDate',value);
        },
      },
      enddate:{
        get(){
          return this.$store.state.formdata.enddate;
        },
        set(value){
          this.$store.commit('setEndDate',value);
        },
      },
    },
    validations:{
      institute : { required },
      stream : { required },
      // cgpa : { required, minLength: minLength(1), maxLength: maxLength(2)},
      cgpa : { required},
      startdate: { required },
      enddate: { required},
    },
    methods: {
      btnPrevious(){
        this.$router.push('/');
      },
      validationStatus(validation){
      return typeof validation != "undefined" ? validation.$error : false;
      },
      submitForm(){
        this.$v.$touch();
        if(this.$v.$pending || this.$v.$error) return;
        alert('Success');
        this.postData();
        this.$router.push('/details');
      },
      postData(){
        this.$store.dispatch('storeFormData');
      },
    },
    mounted(){
      this.$store.dispatch('getData');
    },
}
</script>

<style scoped>
.header-register{
    background: linear-gradient(to left, rgba(116,235,213,0.6), rgba(159,172,230,0.6));
    padding: 20px 0;
}
</style>