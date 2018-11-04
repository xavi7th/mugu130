<template lang="html">
  <div class="grid-container" id="details-section">

    <transition name="fade">

      <page-loading v-if="loading"></page-loading>

      <div class="ui red segment" v-else="!loading && !agent_transactions">

        <div class="grid-container">
    			<div class="grid-80 push-10 tablet-grid-90 tablet-push-5">

            <div class="ui orange segment">
              <p>My Data</p>
            </div>

            <table class="ui blue celled table">
              <tbody>
                <tr>
                  <td>E-mail</td>
                  <td>{{ agent_details.email || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Phone Number</td>
                  <td>{{ agent_details.phone1 || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Phone Network</td>
                  <td>{{ agent_details.network || 'N/A' | uppercase }}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{{ agent_details.address || 'N/A' }}, {{ agent_details.town }}, {{ agent_details.state }}</td>
                </tr>
                <tr>
                  <td>Facebook</td>
                  <td>{{ agent_details.facebook || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>{{ agent_details.instagram || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>{{ agent_details.twitter || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Telegram</td>
                  <td>{{ agent_details.telegram || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>My bank</td>
                  <td>{{ agent_details.bank || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Account Name</td>
                  <td>{{ agent_details.firstname }} {{ agent_details.lastname }}</td>
                </tr>
                <tr>
                  <td>Account Number</td>
                  <td>{{ agent_details.acct_no || 'N/A' }}</td>
                </tr>
                <tr>
                  <td>Account Type</td>
                  <td>{{ agent_details.acct_type || 'N/A' }}</td>
                </tr>
              </tbody>
            </table>
            <div class="ui buttons large">
              <button type="button" class="ui blue button" @click="$emit('go-to', {comp: 'EditDetails'})">Edit Details</button>
            </div>

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
  name: 'ViewProfile',
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
