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
            <a class="ui basic purple label ">{{ agent_details.units_purchased | currency }}</a>
          </div>

          <div id="mini-game" class="">
            <div class="ui labeled button " tabindex="-1">
              <div class="ui green button">Current Wallet Balance</div>
              <a class="ui basic left pointing green label">
                <div countdown="game_timer">
                  <h1 class="time ">{{ agent_details.available_units | currency }}</h1>
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

            <a class="item" href="/tcom01/settings">Profile</a>

            <a href="#" class="item" @click="$emit('logout-agent')">Logout <i class="sign out icon" style="color:white;"></i></a>

          </div>
        </nav>
      </div>
    </div>
  </header>

</template>

<script>
export default {
  props: ['agent_details']
}
</script>

<style lang="css">
</style>
