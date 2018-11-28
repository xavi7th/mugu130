<template lang="html">
  <header id="alpha" class="">
    <div class="grid-container">
      <div class="grid-20">
        <a href="/"><img src="/img/logo.png" alt=""></a>
      </div>
      <div class="grid-60">
        <nav>
          <div class="ui labeled  button" tabindex="-1">
            <div class="ui purple button right pointing label">Total Wallet Funding</div>
            <a class="ui basic purple label ">{{ agent_details.units_purchased | currency('₦') }}</a>
          </div>

          <div id="mini-game" class="">
            <div class="ui labeled button " tabindex="-1">
              <div class="ui button" :class="units_level">Current Wallet Balance</div>
              <a class="ui basic left pointing label" :class="units_level">
                <div countdown="game_timer">
                  <h1 class="time ">{{ agent_details.available_units | currency('₦') }}</h1>
                </div>
              </a>
            </div>
          </div>
        </nav>

      </div>
      <div class="grid-20">
        <nav>
          <div class="ui right floated horizontal list" style="line-height:40px;">

            <a class="item" href="/dashboard">Dashboard</a>

            <a class="item" href="#" @click="$emit('go-to', {comp: 'ViewProfile'})">Profile</a>

            <a href="#" class="item" @click="$emit('logout-agent')">Logout</a>

          </div>
        </nav>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  props: ['agent_details'],
  computed: {
    units_level () {
      if (this.agent_details.available_units <= 500) {
        return 'red'
      }
      else if(this.agent_details.available_units <= 1000) {
        return 'yellow'
      }
      else {
        return 'green'
      }
    }
  }
}
</script>

<style lang="css">
</style>
