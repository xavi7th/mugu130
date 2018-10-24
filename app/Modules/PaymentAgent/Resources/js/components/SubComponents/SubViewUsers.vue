<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
           <!--    Hover Rows  -->
          <div class="panel panel-default">
            <div class="panel-heading">
                User Records
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <button type="button" class="btn btn-success" @click="$emit('switch-component', {data:null, comp:'CreateUser'})">Create New User Account</button>
                <input type="text"class="pull-right col-md-4" placeholder="Enter a search parameter" v-model="searchText">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="default">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Acc Balance</th>
                      <th>Acc Status</th>
                      <th>COT Code</th>
                      <th>Transfer Permitted</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr colspan="6" class="loading text-center text-danger" v-if="loading">
                        Loading...
                    </tr>
                    <tr v-if="error" class="error">
                        <td colspan="6">{{ error }}</td>
                    </tr>
                    <tr v-if="users" v-for="user in users" :key="user.id">
                      <td>{{ user.acc_name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.acc_balance | currency }}</td>
                      <td> {{ user.acc_status }}</td>
                      <td> {{ user.cot_code }}</td>
                      <td> {{ user.transder_permitted ? 'Yes' : 'No' }}</td>
                      <td>
                        <button class="btn btn-xs btn-info" @click="$emit('switch-component', {data:user, comp:'ViewDetails'})">Details</button>
                        <!-- <button class="btn btn-xs btn-primary" @click="$emit('switch-component', {data:user, comp:'NewTransaction'})">Create Transaction</button> -->
                        <button class="btn btn-xs btn-danger" @click="deleteUser(user)">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  created() {
    swal("Retrieving all users....", {
      buttons: false,
    });
    this.loading=true;
      axios.get('api/get-all-users').then( rsp => {
        this.users = rsp.data;
        this.loading=false;
        swal.stopLoading();
        swal.close();
      }, err => {
        this.serverError(err);
      });
  },
  data () {
    return {
      searchText: '',
      error: '',
      users: {},
      loading: false
    };
  },
  computed: {
    filteredTransactions: function() {
     var self = this;
     if (this.searchText.length > 0) {
       return this.transactions.filter(function(item) {
         return self.searchText.indexOf(item.trans_type) > -1;
       });
     }
     else {
         return self.transactions;
     }
    },
  },
  methods: {
   serverError(msg){
     swal("Error!", `${msg}`, "error");
   },
   deleteUser(user){
     swal({
       title: "Are you sure?",
       text: "Once deleted, you will not be able to recover this user account!",
       icon: "warning",
       buttons: {
          cancel: true,
          confirm: {
            text: "Proceed",
            value: true,
            visible: true,
            className: "",
            closeModal: false
          }
        },
       dangerMode: true,
     })
     .then((willDelete) => {
       if (willDelete) {
         return axios.post('api/delete-user', {id: user.id});

       } else {
         swal("User account NOT deleted.", {
           icon: "success",
         });
         throw null;
       }
     })
     .then(results => {
       const status = results.data.status;

       if (!status) {
         return swal('Error', 'Something went wrong at the server. Account not deleted', 'error');
       }
       else {

         let index = this.users.indexOf(user);
         this.users.splice(index, 1);


         swal({
           title: "Success",
           text: 'User deleted',
           icon: 'success',
         });
       }


     })
     .catch(err => {
       console.log(err);
       if (err) {
         swal("Oh noes!", "The AJAX request failed!", "error");
       } else {
         swal.stopLoading();
         swal.close();
       }
     });
   },
  }
}
</script>

<style lang="css">
  td:last-child{
    white-space: nowrap;
  }
</style>
