<template>
    <master-layout>

      <template slot="content-section">

        <div class="container accommodations-container">

          <div class="row">


          </div>

          <div class="row justify-content-center">

          <div class="col-sm-6" v-if="loaders.results">

                <div class="text-center">

                  <page-loading :size="120"></page-loading>

                </div>


            </div>

        </div>

        </div>


      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import AgentNav from './partials/AgentNavComponent'
    import AgentStatistics from './partials/AgentStatisticsComponent'
    import Loader from './misc/LoaderComponent'
    import { apiRootUrl } from '../config/endpoints'

    export default {
        // name: 'AccommodationsComponent',
        components: {
            pageLoading:Loader,
            MasterLayout
        },
        data () {
            return {}
        },
        methods: {
            getaccommodations () {}
        },
        mounted() {
            this.getaccommodations();
        }
    }
</script>
<style>
.accommodations-container {
    padding-top: 4rem !important;
  }
</style>
