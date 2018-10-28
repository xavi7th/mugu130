<template lang="html">
  <header id="alpha" class="">
    <div class="grid-container">
      <div class="grid-35">
        <a href="/"><img src="/img/logo.png" alt=""></a>
      </div>
      <div class="grid-45">
        <nav>
          <div class="ui labeled  button" tabindex="-1">
            <div class="ui purple button right pointing label">
              <i class="heart icon"></i> Total Earnings
            </div>
            <a class="ui basic purple label ">
              ₦35,256.00
            </a>
          </div>

          <div id="mini-game" class="">
            <div class="ui labeled button " tabindex="-1">
              <div class="ui green button">

                <i class="gamepad icon"></i>Join Game
              </div>
              <a class="ui basic left pointing green label">
                <div countdown="game_timer">
                  <h1 class="time ">0:55</h1>
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

            <a class="item" href="">Logout <i class="sign out icon" style="color:white;"></i></a>

          </div>
        </nav>
      </div>
    </div>
  </header>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
