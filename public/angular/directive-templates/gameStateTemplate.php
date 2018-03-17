<div id="game">
  <div id="card" class="ui segments" ng-if="state == 'loading'">
    <!-- game load -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
        <span>Countdown till next game</span>
      </div>
    </div>
    <div class="ui segment">
      <h1 class="time">09:40 <span>am</span></h1>
      <button>game loading</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="state == 'waiting'">
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
        <h1 class="time">04:23 <span>am</span></h1>
      </div>
    </div>


    <div id="card" class="ui segments" ng-if="state == 'active'">
      <!-- game active -->
      <div class="ui segment">
        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
          <span>Game in progress</span>
        </div>
      </div>
      <div class="ui segment">
        <h1 class="time">04:23 <span>am</span></h1>
        <button style="cursor: pointer" @click="joinGame">Join Game</button>
      </div>
    </div>

    <div id="card" class="ui segments" ng-if="state == 'resume'">
      <!-- game resume -->
      <div class="ui segment">
        <div class="ui horizontal list">
          <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
            <span style="padding-right: 10px;">Active Gamers</span>
            <i class="users icon"></i> 2358
          </div>
        </div>
      </div>
      <div class="ui segment">
        <h1 class="time">04:23 <span>am</span></h1>
        <button style="cursor: pointer">Resume Game</button>
      </div>
    </div>
  </div>
