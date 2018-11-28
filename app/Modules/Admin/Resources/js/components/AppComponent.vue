<template>

  <div id="main-controller" style="min-height: 100vh; position: relative; background: #03A9F4;" class="">

        <transition name="page" mode="out-in">

          <router-view/>

        </transition>

  </div>

</template>

<script>

  export default {
    name: 'App',
  }
</script>

<style media="screen">

</style>
