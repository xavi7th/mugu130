<template lang="html">
	<div class="container">
		<div class="row">

      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-2 col-lg-offset-2 toppad">
				<div class="panel panel-info">
					<div class="panel-heading">
						<h3 class="panel-title">
              {{ details.acc_name }}
							<a href="#" @click="$emit('switch-component', {data:null, comp:'Users'})" role="button" class="btn btn-xs btn-danger pull-right"><i class="glyphicon glyphicon-remove"></i></a>
              <a href="#" @click="$emit('switch-component', {data:details, comp:'EditUser'})" role="button" class="btn btn-xs btn-warning pull-right"><i class="glyphicon glyphicon-remove"></i>Edit User</a>
            </h3>

					</div>
					<div class="panel-body">
						<div class="row">
							<!-- <div class="col-md-3 col-lg-3 " align="center"> <img alt="User Pic" :src="details.img" class="img-circle img-responsive"> </div> -->
							<div class=" col-md-12 col-lg-12 ">
								<table class="table table-user-information">
									<tbody>
										<tr>
											<td>Email:</td>
											<td>{{ details.acc_name }}</td>
										</tr>
										<tr>
											<td>Created Date:</td>
											<td>{{ details.created_at }}</td>
										</tr>
										<tr>
											<td>Date of Birth</td>
											<td>{{ details.dob }}</td>
										</tr>

										<tr></tr>
										<tr>
											<td>Acc Balance</td>
											<td>{{ details.acc_balance | currency }}</td>
										</tr>
                    <tr>
                      <td>Acc Number</td>
                      <td>{{ details.acc_num }}</td>
                    </tr>
										<tr>
											<td>Acc status</td>
											<td>{{ details.acc_status }}</td>
										</tr>
										<tr>
											<td>Transfer Permitted</td>
											<td>{{ details.transder_permitted ? 'Yes' : 'No' }}</td>
										</tr>

                    <tr></tr>
										<tr>
											<td>Home Address</td>
                      <td>{{ details.address }}</td>
										</tr>
										<tr>
											<td>City</td>
											<td>{{ details.city }}</td>
										</tr>
										<tr>
											<td>Pronvince</td>
											<td>{{ details.pronvince }}</td>
										</tr>
										<tr>
											<td>Nationality</td>
											<td>{{ details.nationality }}</td>
										</tr>
                    <tr></tr>

										<tr>
											<td>COT Code</td>
											<td>{{ details.cot_code }}</td>
										</tr>
										<tr>
											<td>COT Code Name</td>
											<td>{{ details.cot_code_name }}</td>
										</tr>
										<tr>
											<td>COT Code Error Message</td>
											<td>{{ details.cot_code_error_msg }}</td>
										</tr>

									</tbody>
								</table>

								<div class="flex-center">

                </div>
							</div>
						</div>
					</div>
					<div class="panel-footer flex-center">
            <a href="#" class="btn btn-primary" @click="getUserTransactions()">View Transactions</a>
            <a href="#" class="btn btn-warning" @click="getUserTransferRequests()">View Transfer Requests</a>
            <a href="#" class="btn btn-success" @click="$emit('switch-component', {data:details, comp:'CreateTransaction'})">Create Transaction</a>
						<!-- <a data-original-title="Broadcast Message" data-toggle="tooltip" type="button" class="btn btn-sm btn-primary"><i class="glyphicon glyphicon-envelope"></i></a>
							<a href="edit.html" data-original-title="Edit this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-warning"><i class="glyphicon glyphicon-edit"></i></a>
							<a data-original-title="Remove this user" data-toggle="tooltip" type="button" class="btn btn-sm btn-danger"><i class="glyphicon glyphicon-remove"></i></a> -->
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
      getUserTransactions(){
        swal("Retrieving transactions", {
          buttons: false,
        })
        axios.get('api/get-user-transactions/' + this.details.id)
        .then(results => {
          swal.stopLoading();
          swal.close();
          let dataToPass = {
            user_transactions: results.data,
            prev_details: this.details
          }

          this.$emit('switch-component', {data:dataToPass, comp:'ViewTransactions'})

        })
        .catch(err => {
          console.log(err);
          if (err) {
            swal("Oh noes!", "The request failed!", "error");
          } else {
            swal.stopLoading();
            swal.close();
          }
        });
      },
      getUserTransferRequests(){
        swal("Retrieving transfer requests", {
          buttons: false,
        })
        axios.get('api/get-user-transfer-requests/' + this.details.id)
        .then(results => {
          console.log(results.data);
          swal.stopLoading();
          swal.close();
          let dataToPass = {
            user_transfer_requests: results.data,
            prev_details: this.details
          }

          this.$emit('switch-component', {data:dataToPass, comp:'ViewTransferRequests'})

        })
        .catch(err => {
          console.log(err);
          if (err) {
            swal("Oh noes!", "The request failed!", "error");
          } else {
            swal.stopLoading();
            swal.close();
          }
        });
      },

    },
		created() {},
		props: ['details'],
	}
</script>

<style lang="scss" scoped>
  td:first-child{
    font-weight: bold;
  }
  h3{
    a{
      color:white;
			margin-right: 10px;
    }
  }
</style>
