<template>

  <div id="main-controller" style="min-height: 100vh; position: relative; background: #03A9F4;" class="">
        <keep-alive>
          <component
            v-bind:is="currentComponent"
            v-on:switch-component="switchComponent($event)"
           ></component>
        </keep-alive>
  </div>

</template>

<script>
import Dashboard from './AgentDashboardComponent'



export default {
  components: {
    Dashboard
  },
  data() {
    return {
      currentComponent: 'Dashboard',
      propsToPass: {}
    };
  },
  computed: {
    currentProperties: function() {
      return {
        details: this.propsToPass
      }
    },
  },
  methods: {
    switchComponent(dt) {
      // This method receives an object containing the component to loas as a atring and the data to pass into the componenet as an object
      this.currentComponent = dt.comp;
      this.propsToPass = dt.data;
    },
  }
}
</script>

<style media="screen">
  #dashboard {
    padding-top: 30px !important;
  }

  [name="ppleshape"] {
    width: 100% !important;
  }

  [name="ppleshape"] * {
    width: 100% !important;
  }

  [name="ppleshape"] i {
    padding-top: 20px !important;
  }

  [name="ppleshape"] .label {
    padding-bottom: 20px !important;
  }

  #details-section {
    background-color: #fdfdfd;
    margin-top: 45px;
    padding: 45px 20px;
  }
</style>
