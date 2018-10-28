<template>
    <master-layout>

      <template slot="content-section" slot-scope="propsForSlot">

        <keep-alive>

          <component
          v-bind:is="currentComponent"
          v-bind="currentProperties"
          v-bind:agent_details="propsForSlot.agentDetails"
          v-on:switch-component="switchComponent($event)"
          ></component>

        </keep-alive>


      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import FundUser from './AgentFundUser'
    import Loader from './misc/LoaderComponent'
    import apiRoutes from '../config/endpoints';

    export default {
        name: 'AgentDashboard',
        components: {
            // pageLoading: Loader,  <!-- Use thus <page-loading :size="120"></page-loading> -->
            MasterLayout,
            FundUser
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
            // This method receives an object containing the component to loas as a atring and the data to pass into the componenet as an object
            this.currentComponent = dt.comp;
            this.propsToPass = dt.data;
          },
        }
    }
</script>
<style>

</style>
