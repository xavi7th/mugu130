<template lang="html">
	<div class="container-fluid">
		<div class="row ">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-heading">
						Transfer to self
						<a href="#" @click="$emit('switch-component', {data:details, comp:'ViewDetails'})" role="button" class="btn btn-xs btn-danger pull-right"><i class="glyphicon glyphicon-remove"></i></a>
					</div>
					<div class="panel-body">
						<form @submit.prevent="checkFields()">
							<div class="clearfix"></div> <br>
							<div class="form-group">
								<label for="trans_type" class="col-md-3 control-label">To</label>
								<div class="col-md-7">
                  <select id="trans_type" name="trans_type" class="form-control" v-model="trans_details.trans_type" v-validate="'required'">
										<option value="">Transaction Type</option>
										<option value="debit">Debit</option>
										<option value="credit">Credit</option>
									</select>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('trans_type')">{{ errors.first('trans_type') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.trans_type && fields.trans_type.touched && !fields.trans_type.dirty">Required Field</span>
                  </div>
                </div>
							</div>
							<div class="clearfix"></div> <br>
							<div class="form-group">
								<label for="amount" class="col-md-3 control-label">Amount</label>
								<div class="col-md-7">
									<div class="form-group input-group">
										<span class="input-group-addon">$</span>
										<input type="text" placeholder="Credit will add to account balance and vice versa" class="form-control" id="amount" name="amount" v-model="trans_details.amount" v-validate="'required|decimal:2'">
										<span class="input-group-addon">.00</span>
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('amount')">{{ errors.first('amount') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.amount && fields.amount.touched && !fields.amount.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="description" class="col-md-3 control-label">Description</label>
								<div class="col-md-7">
									<div class="form-group input-group">
										<span class="input-group-addon"><i class="fa fa-edit"></i></span>
										<input type="text" placeholder="Transfer Narration" class="form-control" id="description" name="description" v-model="trans_details.description" v-validate="'required|max:80'">
									</div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('description')">{{ errors.first('description') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.description && fields.description.touched && !fields.description.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="clearfix"></div> <br>
							<div class="form-group">
								<label for="trans_date" class="col-md-3 control-label">Transaction Date</label>
								<div class="col-md-7">
									<div class="form-group input-group">
										<span class="input-group-addon"><i class="fa fa-edit"></i></span>
										<input type="text" placeholder="Supposed date of the transaction" class="form-control" id="trans_date" name="trans_date" v-model="trans_details.trans_date" v-validate="'required|date_format:YYYY-MM-DD'">
									</div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('trans_date')">{{ errors.first('trans_date') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.trans_date && fields.trans_date.touched && !fields.trans_date.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="clearfix"></div> <br>
							<fieldset><button type="submit" class="btn btn-primary col-md-offset-5">Create</button></fieldset>
						</form>
					</div>
					<div class="panel-footer"></div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		props: ['details'],
		data() {
			return {
				trans_details: {},
			}
		},
		created() {},
		methods: {
			checkFields() {
				this.$validator.validate().then(result => {
					if (result) {
						this.createTransaction();
					}
				});
			},
			createTransaction() {
				swal({
						title: "Are you sure?",
						text: "Confirm transaction creation.",
						icon: "warning",
						buttons: {
							cancel: true,
							confirm: {
								text: "Yes! Create transaction",
								value: true,
								visible: true,
								className: "",
								closeModal: false
							}
						},
						// dangerMode: true,
					})
					.then((willCreate) => {
						if (willCreate) {
              this.trans_details.user_id = this.details.id;
							return axios.post('api/create-transaction', {
								details: this.trans_details
							});
						} else {
							swal("Transaction creation cancelled.", {
								icon: "info",
							});
							throw null;
						}
					})
					.then(results => {
						const status = results.data.status;

						if (!status) {
							return swal('Error', 'Something went wrong at the server. Transaction not created', 'error');
						} else {

							swal({
								title: "Success",
								text: 'Transaction created for user',
								icon: 'success',
							});
						}
            this.trans_details = {};
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
	td:last-child {
		white-space: nowrap;
	}
</style>
