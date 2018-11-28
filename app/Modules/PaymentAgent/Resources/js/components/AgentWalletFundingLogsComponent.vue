<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <page-loading v-if="loading"></page-loading>

      <div class="ui red segment" v-else-if="!loading && !wallet_log">

        <table class="ui striped single line table" id="transactions-table">

          <thead>

            <tr>

              <th>Amount</th>

              <th>Charges</th>

              <th>Transaction Type</th>

              <th>Status</th>

              <th>Channel</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td colspan="6"><h1>No available Transactions</h1></td>

            </tr>

          </tbody>

        </table>

      </div>

      <div class="ui purple segment" v-else>

        <table class="ui striped single line table" id="transactions-table">

          <thead>

            <tr>

              <th>Amount</th>

              <th>Charges</th>

              <th>Transaction Type</th>

              <th>Status</th>

              <th>Channel</th>

              <th>Date</th>

            </tr>

          </thead>

          <tbody>

            <tr  v-for="trans in wallet_log">

              <td>{{ trans.amount | currency('₦') }}</td>

              <td>{{ trans.charges | currency('₦') }}</td>

              <td>{{ trans.trans_type }}</td>

              <td>{{ trans.status }}</td>

              <td>{{ trans.channel }}</td>

              <td>{{ trans.updated_at }}</td>

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
      wallet_log: null
    }
  },
  methods: {
    getTransactions (){
      // this.wallet_log = JSON.parse(localStorage.getItem('wallet_log'));
      if (!this.wallet_log) {
        axios.get(`${apiRoutes.agentGetWalletFundLog}`)
              .then( rsp =>{
                this.wallet_log = rsp.data.transactions;
                localStorage.setItem("wallet_log", JSON.stringify(this.wallet_log));
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
