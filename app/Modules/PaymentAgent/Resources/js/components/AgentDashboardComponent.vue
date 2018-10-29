<template>
    <master-layout v-on:switch-component="switchComponent($event)">

      <template slot="content-section" slot-scope="propsForSlot">

        <keep-alive>

          <transition name="slide-out-in" mode="out-in">
            <component
            v-bind:is="currentComponent"
            v-bind="currentProperties"
            v-bind:agent_details="propsForSlot.agentDetails"
            ></component>
          </transition>

        </keep-alive>


      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import FundUser from './AgentFundUserComponent'
    import ViewTransactions from './AgentViewTransactionsComponent'
    import ViewWalletFundLog from './AgentWalletFundingLogsComponent'
    import apiRoutes from '../config/endpoints';

    export default {
        name: 'AgentDashboard',
        components: {
            // pageLoading: Loader,  <!-- Use thus <page-loading :size="120"></page-loading> -->
            MasterLayout, FundUser, ViewTransactions, ViewWalletFundLog
        },
        data() {
          return {
            currentComponent: 'FundUser',
            propsToPass: null
          };
        },
        computed: {
          currentProperties: function() {
            return {
              details: this.propsToPass
            }
          },
        },
        methods: {
          switchComponent(dt) {
            this.currentComponent = dt.comp;
            // this.propsToPass = dt.data;
          },
        }
    }
</script>
<style>

</style>
