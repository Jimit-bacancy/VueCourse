<template>
  <b-container>
    <h2>UserEducation DataTable</h2>
    <br /><br />
    <b-row>
      <b-col md="3">
        <div class="input-group align-items-center">
            <b-form-input
            v-model="filter"
            type="search"
            placeholder="Search"
            ></b-form-input>
            <!-- <i class="fa fa-search fa" aria-hidden="true"></i> -->
        </div>
      </b-col> </b-row><br />
    <b-row>
      <b-col>
        <b-table striped hover bordered :items="formdata" :filter="filter" 
                :per-page="perPage" :current-page="currentPage" :fields="fields"> 
            <template v-slot:cell(actions)="data">
                <b-button variant="danger" @click="deleteItem(data.item.id)">Delete</b-button>
            </template>
        </b-table>
        <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["formdata"],
  data() {
    return {
      filter: "",
      perPage: 2,
      currentPage: 1,
      fields: ['id','fname','lname','institute','branch','cgpa','startdate','enddate','actions'],
    };
  },
  computed: {
    rows() {
      if (this.formdata) {
        return this.formdata.length;
      } else {
        return 0;
      }
    },
  },
  methods: {
      deleteItem(id){
        const index = this.formdata.indexOf((x) => x.id === id);
        this.formdata.splice(index,1);
      }
  },
};
</script>
