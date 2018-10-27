<template>

  <keep-alive>
    <component
      v-bind:is="currentComponent"
      v-bind="currentProperties"
      v-on:switch-component="switchComponent($event)"
     ></component>
  </keep-alive>

</template>

<script>
  import Transactions from './SubComponents/SubViewAllTransactions';



  export default {
      components: {
        Transactions
      },
      data () {
        return {
          currentComponent: 'Transactions',
          propsToPass: ''
        };
      },
      computed: {
        currentProperties: function() {
          return { details: this.propsToPass }
        },
        filteredTransactions: function() {}
      },
      watch: {
          // whenever searchText changes, this function will run
          searchText: function (newQuery, oldQuery) { }
        },
      methods: {
        switchComponent(dt){
          // This method receives an object containing the component to loas as a atring and the data to pass into the componenet as an object
          this.currentComponent = dt.comp;
          this.propsToPass = dt.data;
        },
      },

        created() {
          this.loading=true;
          axios.get('/api/user-dashboard-page-details').then( rsp => {
            this.transactions = rsp.data.transactions;
            this.total_withdrawals = rsp.data.total_withdrawals;
            this.total_deposits = rsp.data.total_deposits;
            this.page_data = rsp.data.details;
            this.page_data.balance = rsp.data.balance;
            this.loading=false;
          });
        }
    }
</script>
