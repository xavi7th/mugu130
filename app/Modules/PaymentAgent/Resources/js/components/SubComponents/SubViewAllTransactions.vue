<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
           <!--    Hover Rows  -->
           <li>
             <router-link @click.native="setActive(1)" :class="[isActive == 1 ? 'active-menu' : '']" to="agent//dashboard"><i class="fa fa-dashboard"></i> Dashboard </router-link>
           </li>
           <li>
             <router-link @click.native="setActive(2)" :class="[isActive == 2 ? 'active-menu' : '']" :to="{ name: 'admin.manage-users' }"> <i class="fa fa-users"></i>  Manage Users</router-link>
           </li>
           <li>
             <router-link @click.native="setActive(3)" :class="[isActive == 3 ? 'active-menu' : '']" :to="{ name: 'admin.manage-transactions' }"> <i class="fa fa-bar-chart-o"></i>  Manage Transactions</router-link>
           </li>
           <li>
             <router-link @click.native="setActive(4)" :class="[isActive == 4 ? 'active-menu' : '']" :to="{ name: 'admin.manage-transfer-requests' }"> <i class="fa fa-credit-card"></i>  Manage Transfer Requests</router-link>
           </li>
           <li>
             <router-link @click.native="setActive(5)" :class="[isActive == 5 ? 'active-menu' : '']" :to="{ name: 'admin.manage-messages' }"> <i class="fa fa-envelope"></i>  Manage Messages</router-link>
           </li>
           <li>
             <a href="/logout"
               onclick="event.preventDefault();
               document.getElementById('logout-form').submit();">
               <i class="fa fa-sign-out fa-fw"></i> Logout
             </a>
             <form id="logout-form" action="/logout" method="POST" style="display: none;">
             </form>
           </li>
          <div class="panel panel-default">
            <div class="panel-heading">
                Transaction Records
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="default">
                      <th>User</th>
                      <th>Transaction Type</th>
                      <th>Description</th>
                      <th>Amount</th>
                      <th>Date</th>
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
                    <tr v-if="transactions" v-for="trans in transactions" :key="trans.id">
                      <td>{{ trans.user.acc_name }}</td>
                      <td>{{ trans.trans_type }}</td>
                      <td>{{ trans.description |truncate(80) }}</td>
                      <td> {{ trans.amount | currency }}</td>
                      <td> {{ trans.trans_date }}</td>
                      <td>
                        <!-- <button class="btn btn-xs btn-info" @click="$emit('switch-component', {data:trans, comp:'ViewDetails'})">Details</button> -->
                        <!-- <button class="btn btn-xs btn-primary" @click="$emit('switch-component', {data:trans, comp:'NewTransaction'})">Create Transaction</button> -->
                        <button class="btn btn-xs btn-danger" @click="deleteTransaction(trans)">Delete</button>
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
    swal("Retrieving all transactions....", {
      buttons: false,
    });
    this.loading=true;
      axios.get('api/get-all-transactions').then( rsp => {
        this.transactions = rsp.data;
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
      transactions: {},
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
   deleteTransaction(transaction){
     swal({
       title: "Are you sure?",
       text: "Once deleted, you will not be able to recover this transaction! <br> If you delete a CREDIT transaction, the amount WILL BE SUBTRACTED from the user's account balance. If you delete a DEBIT transaction, the amount WILL BE ADDED to the user's account balance.",
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
         return axios.post('api/delete-transaction', {id: transaction.id});

       } else {
         swal("Cancelled.", {
           icon: "info",
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

         let index = this.transactions.indexOf(transaction);
         this.transactions.splice(index, 1);


         swal({
           title: "Success",
           text: 'Transaction deleted',
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
  td:nth-child(5){
    white-space: nowrap;
  }
</style>
