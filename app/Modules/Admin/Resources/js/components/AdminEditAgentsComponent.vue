<template>

  <master-layout>

      <template slot="content-section">

        <agent-menu></agent-menu>

          <div class="grid-container">

            <div class="grid-100">

              <div class="ui red segment">

                <transition name="slide-in"  mode="out-in">

                  <page-loading :size="60" v-if="loading"></page-loading>

                  <form class="ui form" name="edit" v-else @submit.prevent="editAgent">

                    <h2 class="ui dividing header">Edit Agent's Information</h2>

                    <div class="field">
                      <label>Name</label>
                      <div class="two fields">
                        <div class="field">
                          <input type="text" name="firstname" placeholder="First Name" v-model="agent_details.firstname">
                        </div>
                        <div class="field">
                          <input type="text" name="lastname" placeholder="Last Name" v-model="agent_details.lastname">
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="two fields">
                        <div class="field">
                          <label>Password</label>
                          <input type="password" name="password" placeholder="Enter Password" v-model="agent_details.password">
                        </div>
                        <div class="field">
                          <div class="three fields">
                            <div class="field">
                              <label>Total Units Purchsased</label>
                              <input type="number" name="num_of_referrals" placeholder="Units Purchased" readonly="readonly"  v-model="agent_details.units_purchased">
                            </div>
                            <div class="field">
                              <label>Wallet Balance</label>
                              <input type="number" name="available_units" placeholder="Wallet Balance" readonly="readonly"  v-model="agent_details.available_units">
                            </div>
                            <div class="field">
                              <label>Profit</label>
                              <input type="number" name="untransferred_earnings" placeholder="Untransferred Earnings" readonly="readonly"  v-model="agent_details.total_untransferred_earnings">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="field">
                      <div class="two fields">
                        <div class="field">
                          <label>Account Number</label>
                          <input type="text" name="phone1" placeholder="Account Number"  v-model="agent_details.acct_no">
                        </div>
                        <div class="field">
                          <label>Bank Name</label>
                          <input type="text" name="available_units" placeholder="Bank Name"  v-model="agent_details.bank">
                        </div>
                      </div>
                      <div class="three fields">
                        <div class="field">
                          <label>Account Type</label>
                          <input type="text" name="earnings" placeholder="Account Type"  v-model="agent_details.acct_type">
                        </div>
                        <div class="field">
                          <label>Phone Number</label>
                          <input type="text" name="phone1" placeholder="Phone Number"  v-model="agent_details.phone1">
                        </div>
                        <div class="field">
                          <label>Phone Network</label>
                          <input type="text" name="network" placeholder="Phone Number"  v-model="agent_details.network">
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <div class="fields">
                        <div class="eight wide field">
                          <label>Email Address</label>
                          <input type="text" name="email" placeholder="Email Address"  v-model="agent_details.email">
                        </div>
                        <div class="eight wide field">
                          <label>Address</label>
                          <textarea rows="2" name="address" placeholder="Address"  v-model="agent_details.address"></textarea>
                        </div>

                      </div>
                    </div>

                    <button type="submit" class="ui button green" tabindex="0">Submit</button>
                  </form>

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
    import apiRoutes, { httpAdminApiRootUrl } from '../config/endpoints';

    export default {
        name: 'EditAgents',
        components: {
            pageLoading: Loader,
            MasterLayout,
            AgentMenu
        },
        created(){
          this.getAgentDetails(this.$route.params.id)
        },
        data() {
          return {
            agent_details: {},
            loading: true
          };
        },
        computed: {

        },
        methods: {
          getAgentDetails(id){
            axios.get( apiRoutes.getAgentDetails(id) ).then(rsp => {
              console.log(rsp);
              this.agent_details = rsp.data;
              this.loading = false;
            });
          },
          editAgent(){
            this.loading = true;
            axios.post(apiRoutes.editAgentsDetails, {details: this.agent_details} ).then(rsp => {
              this.loading = false;
              this.$router.push({name : 'admin.view-agents'});
            });
          }
        }
    }
</script>
<style>
  ui.square{
    border-radius: 4px;
  }
</style>
