<template lang="html">
  <section id="u_details" class="">
    <div class="grid-container">
      <div class="grid-30">
          <h2 class="header " style="margin-bottom: 2px;">Hi Agent {{ agent_details.firstname }}</h2>
      </div>
      <div class="grid-60">
        <div class="ui compact menu">
          <!-- <router-link @click.native=""
                      :to="{ name: 'agent.dashboard' }">

          </router-link> -->
          <a href="#" :class="['item', isActive == 1 ? 'active' : '']"
                      @click="setActive(1, 'FundUser')"> <i class="fa fa-dashboard"></i> Dashboard</a>
          <a href="#" :class="['item', isActive == 2 ? 'active' : '']"
                      @click="setActive(2, 'ViewTransactions')"> <i class="fa fa-sort-amount-asc"></i> Transactions</a>
          <a href="#" :class="['item', isActive == 3 ? 'active' : '']"
                      @click="setActive(3, 'ViewWalletFundLog')"> <i class="fa fa-tasks"></i> Wallet Fund Log</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

  export default {
    name: 'AgentNav',
    props:['agent_details'],
    data () {
      return {
        isActive: 1
      };
    },
    methods: {
      setActive (num, comp) {
       this.isActive = num;
       this.$emit('go-to', {comp})
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
