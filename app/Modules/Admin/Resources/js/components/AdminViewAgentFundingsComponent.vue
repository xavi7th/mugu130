<template>

  <master-layout>

      <template slot="content-section">

        <agent-menu></agent-menu>

          <div class="grid-container">

            <div class="grid-100">

              <div class="ui red segment">

                <div class="grid-100" v-if="!loading">

                  <div class="grid-40">

                    <div class="ui segment compact left floated">

                      <div class="ui horizontal statistic">

                        <div class="value">{{ num_of_agent_fundingss }}</div>

                        <div class="label">Fundings</div>

                      </div>

                    </div>

                  </div>

                  <div class="grid-60">

                    <div class="ui search flex-center" style="justify-content:flex-end">

                      <div class="ui icon input">

                        <input class="prompt" type="text" placeholder="Search...">

                        <i class="search icon"></i>

                      </div>

                    </div>

                  </div>

                  <br>

                </div>

                <transition name="slide-in" mode="out-in">

                  <page-loading :size="60" v-if="loading"></page-loading>

                  <table class="ui striped single line table" id="transactions-table" v-else>

                    <thead>

                      <tr>

                        <th>ID</th>

                        <th>Amount</th>

                        <th>Status</th>

                        <th>Transaction Type</th>

                        <th>Date</th>

                      </tr>

                    </thead>

                    <tbody v-if="num_of_agent_fundingss > 0">

                      <tr  v-for="trans in all_agent_fundings">

                        <td>{{ trans.id }}</td>

                        <td>{{ trans.amount | currency('₦') }}</td>

                        <td>{{ trans.status }}</td>

                        <td>{{ trans.trans_type }}</td>

                        <td>{{ trans.created_at }}</td>

                      </tr>

                    </tbody>

                    <tbody v-else>

                      <tr>

                        <td colspan="5"><h1>No available Fundings</h1></td>

                      </tr>

                    </tbody>

                  </table>

                </transition>

              </div>

            </div>

          </div>

      </template>

    </master-layout>
</template>
<script>
    import MasterLayout from './layouts/MasterLayoutComponent'
    import AgentMenu from './partials/AdminAgentsNavComponent'
    import Loader from './misc/LoaderComponent'
    import apiRoutes from '../config/endpoints';
    import { size } from 'lodash'

    export default {
        name: 'ViewAgentFundings',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){
          this.getAllAgentFundings(this.$route.params.id);
        },
        data() {
          return {
            all_agent_fundings: false,
            loading: true
          };
        },
        computed: {
          num_of_agent_fundingss(){
            return _.size(this.all_agent_fundings);
          }
        },
        methods: {
          getAllAgentFundings(id){
            axios.get(apiRoutes.getAllAgentFundings(id)).then(rsp => {
              this.all_agent_fundings = rsp.data;
              this.loading = false;
            });
          },
        }
    }
</script>
<style lang="scss">
  td{
    h1{
      text-align: center;
    }
  }
</style>
