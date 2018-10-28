<template lang="html">
  <section id="u_details" class="">
    <div class="grid-container">
      <div class="grid-30">
          <h2 class="header " style="margin-bottom: 2px;">Hi Agent </h2>
      </div>
      <div class="grid-60 flex-center">
        <div class="ui compact menu">
          <router-link @click.native="setActive(1)" :class="['item', isActive == 1 ? 'active' : '']"
                      :to="{ name: 'agent.dashboard' }">
                          <i class="fa fa-dashboard"></i> Dashboard
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'AgentNav',
    data () {
      return {
        isActive: 1
      };
    },
    methods: {
      setActive (num) {
       this.isActive = num;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item{
    i{
      padding-right: 2px;
    }
  }

  .header{
    color: white;
  }
</style>
