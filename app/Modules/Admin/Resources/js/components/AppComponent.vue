<template>

  <div id="main-controller" style="min-height: 100vh; position: relative; background: #03A9F4;" class="">
        
        <transition name="page" mode="out-in">

          <router-view/>

        </transition>

  </div>

</template>

<script>
  import ViewAgents from './AdminViewAgentsComponent'

  export default {
    name: 'App',
    components: {
      ViewAgents
    },
    data() {
      return {
        currentComponent: 'ViewAgents',
        propsToPass: {}
      };
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style media="screen">

</style>
