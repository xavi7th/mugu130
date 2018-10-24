<template lang="html">
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
           <!--    Hover Rows  -->
          <div class="panel panel-default">
            <div class="panel-heading">
                Messge Records
            </div>
            <div class="panel-body">
              <div class="table-responsive">
                <table class="table table-hover table-striped">
                  <thead>
                    <tr class="default">
                      <th>Sender Name</th>
                      <th>Sender Email</th>
                      <th>Sender Phone</th>
                      <th>Subject</th>
                      <th>Message</th>
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
                    <tr v-if="messages" v-for="msg in messages" :key="msg.id">
                      <td>{{ msg.sender_name }}</td>
                      <td>{{ msg.sender_email }}</td>
                      <td>{{ msg.sender_phone |truncate(80) }}</td>
                      <td> {{ msg.subject }}</td>
                      <td> {{ msg.message }}</td>
                      <td> {{ msg.created_at }}</td>
                      <td>
                        <button class="btn btn-xs btn-danger" @click="deleteMessge(msg)">Delete</button>
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
    swal("Retrieving all messages....", {
      buttons: false,
    });
    this.loading=true;
      axios.get('api/get-all-messages').then( rsp => {
        this.messages = rsp.data;
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
      messages: {},
      loading: false
    };
  },
  computed: {},
  methods: {
   serverError(msg){
     swal("Error!", `${msg}`, "error");
   },
   deleteMessge(message){
     swal({
       title: "Are you sure?",
       text: "Once deleted, you will not be able to recover this message!",
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
         return axios.post('api/delete-message', {id: message.id});

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
         return swal('Error', 'Something went wrong at the server. Message not deleted', 'error');
       }
       else {

         let index = this.messages.indexOf(message);
         this.messages.splice(index, 1);


         swal({
           title: "Success",
           text: 'Messge deleted',
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
  td:nth-child(6){
    white-space: nowrap;
  }
  td:nth-child(5){
    white-space: normal !important;
  }

</style>
