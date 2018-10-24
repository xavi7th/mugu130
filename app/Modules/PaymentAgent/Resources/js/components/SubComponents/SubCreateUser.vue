<template lang="html">
	<div class="container-fluid">
		<div class="row ">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<div class="panel-heading">
						Create New User Account
						<a href="#" @click="$emit('switch-component', {data:null, comp:'Users'})" role="button" class="btn btn-xs btn-danger pull-right"><i class="glyphicon glyphicon-remove"></i></a>
					</div>
					<div class="panel-body">
						<form @submit.prevent="checkFields()">
							<div class="clearfix"></div> <br>

							<div class="form-group">
								<label for="acc_name" class="col-md-3 control-label">Name </label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Enter User's full name" class="form-control" id="acc_name" name="acc_name" v-model="details.acc_name" v-validate="'required|max:30'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('acc_name')">{{ errors.first('acc_name') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.acc_name && fields.acc_name.touched && !fields.acc_name.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="email" class="col-md-3 control-label">Email</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Email Address for the user" class="form-control" id="email" name="email" v-model="details.email" v-validate="'required|email'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('email')">{{ errors.first('email') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.email && fields.email.touched && !fields.email.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="password" class="col-md-3 control-label">Password</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Leave empty to maintain the old password" class="form-control" id="password" name="password" v-model="details.password" v-validate="'max:15'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('password')">{{ errors.first('password') }}</small>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="acc_num" class="col-md-3 control-label">Contract Number</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Account number for the user to login with" class="form-control" id="acc_num" name="acc_num" v-model="details.acc_num" v-validate="'required'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('acc_num')">{{ errors.first('acc_num') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.acc_num && fields.acc_num.touched && !fields.acc_num.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="acc_type" class="col-md-3 control-label">Account Type</label>
								<div class="col-md-7">
									<select id="acc_type" name="acc_type" class="form-control" v-model="details.acc_type" v-validate="'required'">
										<option value="">Account Type</option>
										<option value="business">Business</option>
										<option value="private">Private</option>
									</select>
									<div class="up">
										<small style="color:red; display:block; text-align:center;" v-show="errors.has('acc_type')">{{ errors.first('acc_type') }}</small>
										<span style="color:red; display:block; text-align:center;" v-show="fields.acc_type && fields.acc_type.touched && !fields.acc_type.dirty">Required Field</span>
									</div>
								</div>
							</div>
							<div class="clearfix"></div> <br>
							<div class="form-group">
								<label for="acc_status" class="col-md-3 control-label">Account Status</label>
								<div class="col-md-7">
									<select id="acc_status" name="acc_status" class="form-control" v-model="details.acc_status" v-validate="'required'">
										<option value="">Account Status</option>
										<option value="dormant">Dormant</option>
										<option value="active">Active</option>
									</select>
									<div class="up">
										<small style="color:red; display:block; text-align:center;" v-show="errors.has('acc_status')">{{ errors.first('acc_status') }}</small>
										<span style="color:red; display:block; text-align:center;" v-show="fields.acc_status && fields.acc_status.touched && !fields.acc_status.dirty">Required Field</span>
									</div>
								</div>
							</div>
							<div class="clearfix"></div> <br>
							<div class="form-group">
								<label for="cot_code_name" class="col-md-3 control-label">COT Code Name</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="The name of the code to show the user that he needs to provide" class="form-control" id="cot_code_name" name="cot_code_name" v-model="details.cot_code_name" v-validate="'alpha_spaces'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('cot_code_name')">{{ errors.first('cot_code_name') }}</small>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="cot_code" class="col-md-3 control-label">COT Code</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="The Code he has to enter to validate it" class="form-control" id="cot_code" name="cot_code" v-model="details.cot_code" v-validate="'alpha_spaces'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('cot_code')">{{ errors.first('cot_code') }}</small>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="cot_code_error_msg" class="col-md-3 control-label">Error Message</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="The error message to display after he has entered the correct cot code" class="form-control" id="cot_code_error_msg" name="cot_code_error_msg" v-model="details.cot_code_error_msg" v-validate="'alpha_spaces|max:30'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('cot_code_error_msg')">{{ errors.first('cot_code_error_msg') }}</small>
                  </div>
								</div>
							</div>
							<div class="form-group">
								<label for="transfer_permitted" class="col-md-3 control-label">Transfer Permitted</label>
								<div class="col-md-7">
									<select id="transfer_permitted" name="transfer_permitted" class="form-control" v-model="details.transfer_permitted" v-validate="'required'">
										<option value="">Choose One</option>
										<option :value="true">Permitted</option>
										<option :value="false">Denied</option>
									</select>
									<div class="up">
										<small style="color:red; display:block; text-align:center;" v-show="errors.has('transfer_permitted')">{{ errors.first('transfer_permitted') }}</small>
										<span style="color:red; display:block; text-align:center;" v-show="fields.transfer_permitted && fields.transfer_permitted.touched && !fields.transfer_permitted.dirty">Required Field</span>
									</div>
								</div>
							</div>
							<div class="clearfix"></div> <br>

							<div class="form-group">
								<label for="address" class="col-md-3 control-label">Address</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Address of the user" class="form-control" id="address" name="address" v-model="details.address" v-validate="'required|max:50'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('address')">{{ errors.first('address') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.address && fields.address.touched && !fields.address.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="clearfix"></div> <br>

							<div class="form-group">
								<label for="nationality" class="col-md-3 control-label">Nationality</label>
								<div class="col-md-7">
									<div class="form-group">
										<input type="text" placeholder="Nationality" class="form-control" id="nationality" name="nationality" v-model="details.nationality" v-validate="'required'">
                  </div>
                  <div class="up">
                    <small style="color:red; display:block; text-align:center;" v-show="errors.has('nationality')">{{ errors.first('nationality') }}</small>
                    <span style="color:red; display:block; text-align:center;" v-show="fields.nationality && fields.nationality.touched && !fields.nationality.dirty">Required Field</span>
                  </div>
								</div>
							</div>
							<div class="clearfix"></div> <br>
							<fieldset><button type="submit" class="btn btn-primary col-md-offset-5">Save</button></fieldset>
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
		data() {
			return {
				details: {},
			}
		},
		created() {},
		methods: {
			checkFields() {
				this.$validator.validate().then(result => {
					if (result) {
						this.createUserAccount();
					}
				});
			},
			createUserAccount() {
				swal({
						title: "Are you sure?",
						text: "Details will be saved as you have entered them.",
						icon: "warning",
						buttons: {
							cancel: true,
							confirm: {
								text: "Yes! Save details",
								value: true,
								visible: true,
								className: "",
								closeModal: false
							}
						},
					})
					.then((willEdit) => {
						console.log(this.details);
						if (willEdit) {
							// delete this.details.acc_balance;
							this.details.name = this.details.acc_name;
							return axios.post('api/create-user', {
								details: this.details
							});
						} else {
							swal("Cancelled.", {
								icon: "info",
							});
							throw null;
						}
					})
					.then(results => {
						console.log(results.data);
						const status = results.data.status;

						if (!status) {
							return swal('Error', 'Something went wrong at the server. Details not saved', 'error');
						} else {
							this.details={};
							swal({
								title: "Success",
								text: 'User details saved',
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
	td:last-child {
		white-space: nowrap;
	}
</style>
