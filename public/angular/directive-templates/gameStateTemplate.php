<div id="game">

  <div id="card" class="ui segments" ng-if="game_state == 'loading'">
    <!-- game load -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
        <span>Countdown till next game</span>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer"></countdown-timer>
      <button>game loading</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'waiting'">
    <!-- game waiting -->
    <div class="ui segment">
      <div class="ui horizontal list">
        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
          <span style="padding-right: 10px;">Active Gamers</span>
          <i class="users icon"></i> 2358
        </div>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer"></countdown-timer>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'active'">
    <!-- game active -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
        <span>Game in progress</span>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer"></countdown-timer>
      <button style="cursor: pointer" ng-click="joinGame()">Join Game</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'paused'">
    <!-- game paused -->
    <div class="ui segment">
      <div class="ui horizontal list">
        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
          <span style="padding-right: 10px;">Active Gamers</span>
          <i class="users icon"></i> 2358
        </div>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer"></countdown-timer>
      <button style="cursor: pointer">Resume Game</button>
    </div>
  </div>
</div>
