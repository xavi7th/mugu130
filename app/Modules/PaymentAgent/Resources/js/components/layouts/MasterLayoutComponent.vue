<template>

  <div>

      <agent-header  v-on:logout-agent="logoutAgent()" v-bind:agent_details="agent_details"></agent-header>

      <agent-nav v-bind:agent_details="agent_details"></agent-nav>

      <div id="dashboard">

        <agent-statistics></agent-statistics>

        <!--
          Bind the agent details to the slot. On the slot template create a slot scope thus
          <template slot="content-section" slot-scope="slotProps"> </template>
          Then the data is then available within the template as slotProps.whatever
          This data can be passed as a prop to a component whether dynamic or fixed that is within the template
          And of course it must be received in the props array of the said component
          A complete example is
          <template slot="content-section" slot-scope="dataForSlot">
            The bound data is {{ dataForSlot }}
            <component v-bind:is="currentComponent" v-bind:dataToPass="dataForSlot"></component>
          </template>
        -->
        <slot name="content-section" v-bind:agentDetails="agent_details"></slot>

      </div>

      <agent-footer></agent-footer>

  </div>

</template>

<script>
  import AgentHeader from '../partials/AgentHeaderComponent'
  import AgentNav from '../partials/AgentNavComponent'
  import AgentStatistics from '../partials/AgentStatisticsComponent'
  import AgentFooter from '../partials/FooterComponent'
  import apiRoutes from '../../config/endpoints'

  export default {
    name: 'MasterLayout',
    created(){
      this.getAgentDetails();
    },
    data (){
      return {
        agent_details: {}
      }
    },
    components: {
      AgentHeader, AgentFooter, AgentNav, AgentStatistics
    },
    methods: {
      logoutAgent(){
        apiRoutes.logoutAgent();
      },
      getAgentDetails(){
        axios.get(apiRoutes.agentDetails).then(rsp => {
          this.agent_details = rsp.data;
        },
        err => {
          apiRoutes.logoutAgent('Could not retrieve user details. Logging you out.');
        });

      }
    }
  }
</script>
<style scoped>
  .master-container {
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  @media screen and (max-width: 767px) {
    .master-container {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
  }
</style>
