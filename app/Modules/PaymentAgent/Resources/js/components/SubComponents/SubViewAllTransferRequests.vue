<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
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
                      <th>Recipient</th>
                      <th>Bank Name</th>
                      <th>Amount</th>
                      <th>Payment Type</th>
                      <th>Country</th>
                      <th>Status</th>
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
                    <tr v-if="transfer_requests" v-for="trans in transfer_requests" :key="trans.id">
                      <td>{{ trans.user.acc_name }}</td>
                      <td> {{ trans.acc_name }}</td>
                      <td> {{ trans.bank_name }}</td>
                      <td> {{ trans.amount | currency }}</td>
                      <td> {{ trans.payment_type }}</td>
                      <td> {{ trans.country }}</td>
                      <td> {{ trans.status }}</td>
                      <td>
                        <button class="btn btn-xs btn-danger" @click="deleteTransferRequest(trans)">Delete</button>
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
    swal("Retrieving all transfer requests....", {
      buttons: false,
    });
    this.loading=true;
      axios.get('api/get-all-transfer-requests').then( rsp => {
        this.transfer_requests = rsp.data;
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
      transfer_requests: {},
      loading: false
    };
  },
  computed: {},
  methods: {
   serverError(msg){
     swal("Error!", `${msg}`, "error");
   },
   deleteTransferRequest(transfer_request){
     swal({
       title: "Are you sure?",
       text: "Once deleted, you will not be able to recover this transfer request!",
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
         return axios.post('api/delete-transfer-request', {id: transfer_request.id});

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

         let index = this.transfer_requests.indexOf(transfer_request);
         this.transfer_requests.splice(index, 1);


         swal({
           title: "Success",
           text: 'Transfer Request deleted',
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
