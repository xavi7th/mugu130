<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <page-loading v-if="loading"></page-loading>

      <div class="ui red segment" v-else-if="!loading && !agent_transactions">
        <table class="ui striped single line table" id="transactions-table">

          <thead>

            <tr>

              <th>User Name</th>

              <th>User E-mail</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td colspan="5"><h1>No available Transactions</h1></td>

            </tr>

          </tbody>

        </table>

      </div>

      <div class="ui purple segment" v-else>

        <table class="ui striped single line table" id="transactions-table">

          <thead>

            <tr>

              <th>User Name</th>

              <th>User E-mail</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            <tr  v-for="trans in agent_transactions">

              <td>{{ trans.credited_user.firstname }} {{ trans.credited_user.lastname }}</td>

              <td>{{ trans.credited_user.email }}</td>

              <td>{{ trans.amount | currency('₦') }}</td>

              <td>{{ trans.status }}</td>

              <td>{{ trans.created_at }}</td>

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

<style lang="css" scoped>

  h1{
    font-family: alegreya sans;
    font-weight: 100;
    margin-bottom: 0px;
  }

</style>
