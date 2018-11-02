<template>

  <div id="main-controller" style="min-height: 100vh; position: relative; background: #03A9F4;" class="">
        <!-- <keep-alive>
           <transition name="slide-out-in" mode="out-in">
             <component
               v-bind:is="currentComponent"
              ></component>
           </transition>
        </keep-alive> -->

        <transition name="page" mode="out-in">

          <router-view/>

        </transition>

  </div>

</template>

<script>
  import ManageAgents from './AdminManageAgentsComponent'

  export default {
    name: 'App',
    components: {
      ManageAgents
    },
    data() {
      return {
        currentComponent: 'ManageAgents',
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
