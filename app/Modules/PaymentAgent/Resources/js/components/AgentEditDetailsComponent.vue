<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <page-loading v-if="loading"></page-loading>

      <div class="ui red segment" v-else="!loading && !agent_transactions">

        <div class="grid-container">
    			<div class="grid-80 push-10 tablet-grid-90 tablet-push-5">

            <form class="ui form" name="edit" @submit.prevent="editAgent">

              <h2 class="ui dividing header">Edit My Information</h2>

              <!-- <div class="field">
                <label>Name</label>
                <div class="two fields">
                  <div class="field">
                    <input type="text" name="firstname" placeholder="First Name" v-model="agent_details.firstname">
                  </div>
                  <div class="field">
                    <input type="text" name="lastname" placeholder="Last Name" v-model="agent_details.lastname">
                  </div>
                </div>
              </div> -->
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

              <!-- <div class="field">
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
              </div> -->
              <!-- <div class="field">
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
              </div> -->

              <div class="ui buttons large">
                <button type="submit" class="ui button green" tabindex="0">Save Details</button>
              </div>
            </form>


    			</div>
    		</div>

      </div>

    </transition>

  </div>
</template>

<script>
import apiRoutes from '../config/endpoints';
import Loader from './misc/LoaderComponent'

export default {
  name: 'EditDetails',
  props: ['agent_details'],
  components: { pageLoading: Loader },
  created() {
      document.title = "View Profile | Agent Dashboard";
  },
  data() {
    return{
      loading: false,
      agent_transactions: null
    }
  },
  methods: {
    editAgent(){
      this.loading = true;
      axios.post(apiRoutes.agentEditDetails, {details: this.agent_details} ).then(rsp => {
        this.loading = false;
        this.$emit('go-to', {comp: 'ViewProfile'})
      });
    },
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
