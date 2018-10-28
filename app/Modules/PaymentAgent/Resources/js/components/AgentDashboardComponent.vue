<template>
    <master-layout>

      <template slot="content-section">

        <keep-alive>
          <component
          v-bind:is="currentComponent"
          v-bind="currentProperties"
          v-on:switch-component="switchComponent($event)"
          ></component>
        </keep-alive>

        <!-- <page-loading :size="120"></page-loading> -->


      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import FundUser from './AgentFundUser'
    import Loader from './misc/LoaderComponent'

    export default {
        name: 'AccommodationsComponent',
        components: {
            pageLoading: Loader,
            MasterLayout,
            FundUser
        },
        mounted() {
            // this.getaccommodations();
        },
        data() {
          return {
            currentComponent: 'FundUser',
            propsToPass: {}
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
