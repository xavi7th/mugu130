<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <div class="ui purple segment" v-if="user_details" :key="1">

        <form class="ui form" @submit.prevent="creditUser">

          <h1 class="ui header">Credit {{ user_details.firstname }}'s account</h1>

          <div class="ui divider"></div>

          <div class="user-details ui positive message">
            <h4>User's Name: {{ user_details.firstname }} {{ user_details.lastname }}</h4>
            <h4>User's Email: {{ user_details.email }}</h4>
          </div>

          <div class="ui download" :class="{loading:loading}">

            <div class="ui icon input">

              <input class="prompt" type="text" :placeholder="`enter amount to credit ${user_details.firstname}`" name="credit_amount"
              v-model="credit_amount" v-validate="'min_value:200'" autofocus min="200">

              <i class="download icon"></i>

            </div>

            <div class="ui negative message" v-if="errors.has('credit_amount')">

              <i class="close icon"></i>

              <div class="header">{{ errors.first('credit_amount') }}</div>

            </div>

            <div class="results"></div>

          </div>

          <button :class="['ui', 'blue', 'button', {'loading' : loading}]"
          :disabled="loading || !credit_amount || errors.has('credit_amount') || credit_amount > agent_details.available_units" type="submit">Credit Amount</button>

        </form>

      </div>

      <div class="ui red segment" v-else>

        

      </div>

    </transition>

  </div>
</template>

<script>
import apiRoutes from '../config/endpoints';

export default {
  name: 'FundUser',
  props: ['details', 'agent_details'],
  created() {
    // Customise the validator message to be displayed
			const dict = {
			  custom: {
			    user_email: {
			      email: 'The user email must be a valid email'
			    }
			  }
			};
			this.$validator.localize('en', dict);
  },
  data() {
    return{
      loading: false,
      user_email: null,
      user_details: null,
      credit_amount:null,
    }
  },
  methods: {
    checkFields() {
			return this.$validator.validate();
		},
    resetComponent() {
      this.loading=false;
      this.user_details = null;
      this.user_email = null;
      this.credit_amount = null;
		},
    findUser (){
      this.checkFields().then(result => {
        if (result) {
          this.loading = true;
          axios.get(`${apiRoutes.agentFindUser}/${this.user_email}`)
                .then( rsp =>{
                  if (rsp.status == 204) {
                    swal('Error', `User not found. Check email and try again`, 'error');
                  }
                  else{
                    this.user_details = rsp.data;
                  }
                  this.loading = false;
                }, err =>{
                  swal('Error', `${err}`, 'error');
                  this.loading = false;
                });
        }
      });
    },
    creditUser(){
      this.loading = true;
      this.checkFields().then(result => {
        if(result){
          swal({
            title: "Are you sure?",
            text: `₦${this.credit_amount} will be deducted from your wallet. You will make a profit of ₦50. Are you sure you want to fund this user with ₦${this.credit_amount - 100}? `,
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
          .then((willCredit) => {
            if (willCredit) {
              return axios.post(apiRoutes.agentCreditUser, {user_id: this.user_details.id, amount: this.credit_amount});
            } else {
              swal("Cancelled.", {
                icon: "info",
              });
              throw null;
            }
          })
          .then(rsp => {
            if (!rsp.data.status) {
              if (rsp.data.message) {
                this.resetComponent();
                return swal(rsp.data.message, '', 'error');
              }
              else{
                this.resetComponent();
                return swal('Error', 'Something went wrong at the server. User not credited', 'error');
              }
            }
            else {
              this.agent_details.available_units -= this.credit_amount;
              swal({
                title: "Success",
                text: rsp.data.message,
                icon: 'success',
              });
            }
            this.resetComponent();
          })
          .catch(err => {
            this.resetComponent();
            if (err) {
              swal("Oh noes!", "The AJAX request failed!", "error");
            }
            else {
              swal.stopLoading();
              swal.close();
            }
          });
        }
      });

    },
  }
}
</script>

<style lang="scss" scoped>
  .ui{
    &.input{
      width: 30%;
      margin-bottom: 25px;
    }
    &.form{
      text-align: center;
    }
    .message{
      max-width: 35%;
      margin: 0 auto;
    }
  }
  h1{
    font-family: alegreya sans;
    font-weight: 100;
    margin-bottom: 0px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .user-details{
    text-align: left;
    margin: 0 auto 25px !important;
  }
</style>
