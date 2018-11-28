<template lang="html">
  <header id="alpha" class="">
    <div class="grid-container">
      <div class="grid-35">
        <a href="/"><img src="/img/logo.png" alt=""></a>
      </div>
      <div class="grid-45">
        <nav>
          <div class="ui labeled  button" tabindex="-1">
            <div class="ui purple button right pointing label">Total Earnings</div>
            <a class="ui basic purple label ">{{ total_earnings | currency('₦') }}</a>
          </div>

          <div id="mini-game">
            <div class="ui labeled button" tabindex="-1">
              <div class="ui button">
                <i class="gamepad icon"></i>DISABLED
              </div>
              <a class="ui basic left pointing label">
                  <div>
                    <h1 class="time">0:03</h1>
                  </div>
              </a>
            </div>
          </div>
        </nav>

      </div>
      <div class="grid-20">
        <nav>
          <div class="ui right floated horizontal list" style="line-height:40px;">
            <a class="item" :href="routes.adminDashboard" target="">Dashboard</a>

            <a class="item" href="/tcom01/settings">Profile</a>

            <a href="#" class="item" @click="$emit('logout-admin')">Logout <i class="sign out icon" style="color:white;"></i></a>

          </div>
        </nav>
      </div>
    </div>
  </header>

</template>

<script>
import routes from '../../config/endpoints';

export default {
  name: 'AdminHeader',
  props: ['total_earnings'],
  data(){
    return {
      routes
    }
  }
}
</script>

<style lang="css">
</style>
