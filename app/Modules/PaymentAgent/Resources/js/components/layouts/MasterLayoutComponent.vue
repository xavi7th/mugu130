<template>

  <div>

      <agent-header></agent-header>

      <agent-nav></agent-nav>

      <div id="dashboard">

        <agent-statistics></agent-statistics>

        <slot name="content-section"></slot>

      </div>

      <agent-footer></agent-footer>

  </div>

</template>

<script>
  import AgentHeader from '../partials/AgentHeaderComponent'
  import AgentNav from '../partials/AgentNavComponent'
  import AgentStatistics from '../partials/AgentStatisticsComponent'
  import AgentFooter from '../partials/FooterComponent'
  export default {
    name: 'MasterLayout',
    components: {
      AgentHeader, AgentFooter, AgentNav, AgentStatistics
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
