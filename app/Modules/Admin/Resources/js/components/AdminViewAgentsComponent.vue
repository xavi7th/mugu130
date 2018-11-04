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
                        <div class="value">
                          {{ num_of_agents }}
                        </div>
                        <div class="label">
                          Agents
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="grid-15">
                    <!-- <button class="ui orange button" ng-click="newQuestion()">New Agent</button> -->
                  </div>
                  <div class="grid-45">
                    <div class="ui search flex-center" style="justify-content:flex-end">
                      <div class="ui icon input">
                        <input class="prompt" type="text" placeholder="Search...">
                        <i class="search icon"></i>
                      </div>
                      <div class="results"></div>
                    </div>
                  </div>
                  <br>
                </div>

                <transition name="slide-in" mode="out-in">

                  <page-loading :size="60" v-if="loading"></page-loading>

                  <table class="ui  striped celled table" v-else>
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>E-Mail</th>
                        <th>Full Name</th>
                        <th>Available Units</th>
                        <th>Account Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr v-for="agent in all_agents">
                        <td>{{ 'q.id' }}</td>
                        <td><span style="cursor:pointer;">{{ agent.email }}</span></td>
                        <td>{{ agent.firstname }} {{ agent.lastname }}</td>
                        <td>{{ agent.available_units | currency('₦') }}</td>
                        <td>{{ agent.deleted_at ? 'Deleted' : agent.useraccstatus }}</td>
                        <td>
                          <div class="ui mini buttons">
                            <router-link :to="{ name: 'admin.edit-agent', params: { id: agent.id } }"
                                          class="ui orange button" active-class="active">
                                Edit
                            </router-link>
                            <div class="or"></div>
                            <button class="ui green button" @click="restoreAgent(agent)" v-if="agent.deleted_at">Restore</button>
                            <button class="ui red button" @click="deleteAgent(agent)" v-else="agent.deleted_at">Delete</button>
                          </div>
                        </td>
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
        name: 'ViewAgents',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){
          this.getAllAgents();
        },
        data() {
          return {
            all_agents: false,
            loading: true
          };
        },
        computed: {
          num_of_agents(){
            return _.size(this.all_agents);
          }
        },
        methods: {
          getAllAgents(){
            axios.get(apiRoutes.getAllAgents).then(rsp => {
              this.all_agents = rsp.data;
              this.loading = false;
            });
          },
          deleteAgent(agent){
            this.loading = true;
            axios.delete(`${apiRoutes.deleteAgent}/${agent.id}` ).then(rsp => {
              this.loading = false;
              agent.deleted_at = true;
              // var removed = this.all_agents.indexOf(agent);
              // this.all_agents.splice(removed, 1);
            });
          },
          restoreAgent(agent){
            this.loading = true;
            axios.delete(`${apiRoutes.restoreAgent}/${agent.id}` ).then(rsp => {
              this.loading = false;
              agent.deleted_at = false;
              // var removed = this.all_agents.indexOf(agent);
              // this.all_agents.splice(removed, 1);
            });
          }
        }
    }
</script>
<style>

</style>
