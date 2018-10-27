<template>
  <div>
      <inverse-nav />

      <div class="container-fluid master-container">

        <slot name="content-section"></slot>

      </div>


      <footer-component />
  </div>
</template>
<script>
  import AgentHeader from '../partials/AgentHeaderComponent'
  import Footer from '../partials/FooterComponent'
  export default {
    name: 'MasterLayout',
    components: {
      AgentHeader, Footer
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
