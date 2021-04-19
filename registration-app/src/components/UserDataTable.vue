<template>
  <b-container>
    <h2>UserDetails DataTable</h2>
    <br /><br />
    <b-row>
      <b-col md="3">
        <div class="input-group align-items-center justify-content-between">
            <b-form-input
            v-model="filter"  
            type="search"
            placeholder="Search"
            ></b-form-input>
            <!-- <i class="fa fa-search fa" aria-hidden="true"></i> -->
            <b-button class="mr-2" to="/">Add Data</b-button>
        </div>
        
      </b-col> </b-row><br />
    <b-row>
      <b-col>
        <b-table striped hover bordered :items="totaldata" :filter="filter" show-empty stacked="md"
                :per-page="perPage" :current-page="currentPage" :fields="fields"> 
            <template v-slot:cell(actions)="data">
                <b-button variant="danger" @click="deleteItem(data.item.uid)">Delete</b-button>
            </template>
        </b-table>
        <b-pagination v-model="currentPage" align="center" pills size="lg" :total-rows="rows" :per-page="perPage"></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
  props: ["totaldata"],
  data() {
    return {
      filter: "",
      perPage: 2,
      currentPage: 1,
      key: "actions",
      label: "Actions",
      // fields: ['id','fname','lname','gender','email','phone','actions'],
      fields: [
        // {
        //   key: 'id',
        //   sortable: true,
        // },
        {
          key: 'fname',
          sortable: true,
        },
        {
          key: 'lname',
          sortable: true,
        },
        {
          key: 'gender',
          sortable: true,
        },
        {
          key: 'email',
          sortable: true,
        },
        {
          key: 'phone',
          sortable: true,
        },
        {
          key: 'actions',
          sortable: true,
        }
      ],
      // totaldata: [],
    };
  },
  // watch: {
  //     options:{ 
  //         handler(){
  //             this.getData();
  //         }
  //     },
  //     deep: true,
  // },
  computed: {
    rows() {
      if (this.totaldata) {
        return this.totaldata.length;
      } else {
        return 0;
      }
    },
  },
  methods: {
      // deleteItem(id){
      //   const index = this.formdata.indexOf((x) => x.id === id);
      //   this.formdata.splice(index,1);
      // },
      deleteItem(id) {
      if (confirm("Are you sure you want to delete this Data?")) {
        axios
          .delete(
            `https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse/${id}.json`
          )
          .then((res) => {
            console.log("Response Data = ", res.data);

            const filteredUsers = this.totaldata.filter((item) => item.uid !== id);
            this.$emit("update:posts", filteredUsers);
            alert("data deleted");
          });
      }
    },
      // getData(){
        // this.$store.dispatch('getFormData');
        //   const { page, itemsPerPage } = this.options;
        //   let pageNumber = page - 1; 
          // axios.get('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json')
          //   .then((res)=>{
          //       // console.log(res);
          //       this.totaldata = res.data.data;
          //       console.log(res.data); 
          //   });
          // fetch('https://registration-form-e64d5-default-rtdb.firebaseio.com/formResponse.json',{
          //   method: 'GET',

          // }).then((res)=> res.json())
          // .then((data)=> console.log(data))
          // .catch((err)=> console.log(err));
      // }
  },
  mounted() {
    console.log("Posts =", this.totaldata);
  }
};
</script>
