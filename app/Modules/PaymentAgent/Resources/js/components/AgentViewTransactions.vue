<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <page-loading v-if="loading"></page-loading>

      <div class="ui purple segment" v-else-if="!loading && !agent_transactions">

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

        <table class="ui striped single line table" id="transactions-table">

          <thead>

            <tr>

              <th>User Name</th>

              <th>User E-mail</th>

              <th>Amount</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            <tr  v-for="trans in agent_transactions">

              <td>{{ trans.credited_user.firstname }} {{ trans.credited_user.lastname }}</td>

              <td>{{ trans.credited_user.email }}</td>

              <td>{{ trans.amount | currency }}</td>

              <td>{{ trans.status }}</td>

            </tr>

          </tbody>

        </table>

      </div>

    </transition>

  </div>
</template>

<script>
import apiRoutes from '../config/endpoints';
import Loader from './misc/LoaderComponent'

export default {
  name: 'FundUser',
  props: ['agent_details'],
  components: { pageLoading: Loader },
  created() {
      document.title = "View Transactions | Agent Dashboard";
      this.getTransactions();
  },
  data() {
    return{
      loading: true,
      agent_transactions: null
    }
  },
  methods: {
    getTransactions (){
      this.agent_transactions = JSON.parse(localStorage.getItem('agent_transactions'));
      if (!this.agent_transactions) {
        axios.get(`${apiRoutes.agentGetTransactions}`)
              .then( rsp =>{
                this.agent_transactions = rsp.data;
                localStorage.setItem("agent_transactions", JSON.stringify(this.agent_transactions));
                this.loading = false;
              }, err =>{
                swal('Error', `${err}`, 'error');
              });
      }
      else{
        this.loading = false;
      }

    }
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
