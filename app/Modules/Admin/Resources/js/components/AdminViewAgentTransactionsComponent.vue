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

                        <div class="value">{{ num_of_agent_transactions }}</div>

                        <div class="label">Transactions</div>

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

                        <th>User Name</th>

                        <th>User E-mail</th>

                        <th>Amount</th>

                        <th>Status</th>

                        <th>Date</th>

                      </tr>

                    </thead>

                    <tbody v-if="num_of_agent_transactions > 0">

                      <tr  v-for="trans in all_agent_transactions">

                        <td>{{ trans.credited_user.firstname }} {{ trans.credited_user.lastname }}</td>

                        <td>{{ trans.credited_user.email }}</td>

                        <td>{{ trans.amount | currency }}</td>

                        <td>{{ trans.status }}</td>

                        <td>{{ trans.created_at }}</td>

                      </tr>

                    </tbody>

                    <tbody v-else>

                      <tr>

                        <td colspan="5"><h1>No available Transactions</h1></td>

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
        name: 'ViewAgentTransactions',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){
          this.getAllAgentTransactions(this.$route.params.id);
        },
        data() {
          return {
            all_agent_transactions: false,
            loading: true
          };
        },
        computed: {
          num_of_agent_transactions(){
            return _.size(this.all_agent_transactions);
          }
        },
        methods: {
          getAllAgentTransactions(id){
            axios.get(apiRoutes.getAllAgentTransactions(id)).then(rsp => {
              this.all_agent_transactions = rsp.data;
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
