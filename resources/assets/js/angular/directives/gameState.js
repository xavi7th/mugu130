// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = `
<div id="game">
  <div id="card" class="ui segments" ng-if="game_state == 'loading'">
    <!-- game load -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
        <span>Countdown till next game</span>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
      <button>game loading</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'waiting'">
    <!-- game waiting -->
    <div class="ui segment">
      <div class="ui horizontal list">
        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
          <span style="padding-right: 10px;">Active Gamers</span>
          <i class="users icon"></i> {{ total_examinees }}
        </div>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer" finish="displayResults()"></countdown-timer>
    </div>

    <div class="ui segment">
      <div class="ui labeled button" tabindex="-1" ng-if="user_score < 10">
        <div class="ui red button">
          <i class="fork icon"></i> Exam Score
        </div>
        <a class="ui basic red left pointing label">
          {{ user_score }} out of 10
        </a>
      </div>
      <div class="ui labeled button" tabindex="-1" ng-if="user_score > 9">
        <div class="ui basic blue button">
          <i class="fork icon"></i> Exam Score
        </div>
        <a class="ui basic left pointing blue label">
        {{ user_score }} out of 10
        </a>
      </div>
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
      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
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
        <div class="ui violet label" style="font-size: 13px;">
          <span style="padding-right: 10px;">Active Gamers</span>
          <i class="users icon"></i> {{ total_examinees }}
        </div>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer" finish="endGameReload()"></countdown-timer>
      <button style="cursor: pointer" ng-click="resumeGame()">Resume Game</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'transition'">
    <!-- game loading network slow -->
    <div class="ui segment">
      <div class="ui horizontal list">
        <div class="ui violet label" style="font-size: 13px;">
          <span style="padding-right: 10px;">Active Gamers</span>
          <i class="users icon"></i> {{ total_examinees }}
        </div>
      </div>
    </div>
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <h1 style="min-height:150px;">Loading...</h1>
    </div>
  </div>
</div>

`;



angular.module('gameState', []).directive('gameState', ['$location', '$route', 'Notification', '$localStorage', '$sessionStorage', 'sendRequest', function ($location, $route, Notification, $localStorage, $sessionStorage, sendRequest) {
  return {
    restrict: 'E',
    scope:{
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gameStateTemplate.php',
    template:url,
    replace: true,
    link: function(scope, element, attributes){

		},
    controller: ['$scope', ($scope) => {

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      //when the game was paused, ends the user's incomplete game and displays the results
      $scope.endGameReload = function () {
        alert('The game has ended');
        //Send a request to end the user's game and redirect to results display page
        sendRequest.postRequest('/user/end-exam', $sessionStorage.user_questions)
                 .then(function (rsp) {
                   delete $sessionStorage.user_questions;
                   delete $sessionStorage.extra;
                   delete $sessionStorage.options;

                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                     $location.path('/dashboard');
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       sendRequest.storeData('user_score', rsp.data.user_score);
                       $localStorage.user_score = rsp.data.user_score;
                       $location.path('/dashboard/display-results');
                     }
                   }
                 });
      };

      //when the game was paused, take the user back to the game
      $scope.resumeGame = function () {
        $scope.game_state = 'transition';

        sendRequest.postRequest('user/resume-game')
                    .then(()=>{
                      $location.path('/dashboard/game-play');
                    });

        //Send a request to resume the game and set the session back to active

        $scope.displayResults();
      };

      // handle page reload on timer countdown so that the page can get the next thing from the server
      $scope.pageReload = function () {
        // location.reload();
        sendRequest.getGameState()
                 .then( rsp => {
                   $scope.game_state = rsp.game_state;
                   $scope.game_timer = rsp.game_timer;
                   $scope.total_examinees = rsp.total_examinees;
                 });
      };

      // refresh the game state and then redirect to the display results page
      $scope.displayResults = function () {
        NProgress.start();

        sendRequest.getGameState('/user/get-game-state')
                 .then( rsp => {
                   $scope.game_state = rsp.game_state;
                   $scope.game_timer = rsp.game_timer;

                   if (rsp.game_state == 'loading') {
                     $location.path('/dashboard/display-results');
                   } else {
                     // $location.url('/invalid');
                     $route.reload();
                   }
                   NProgress.done();
                 });
      };



      $scope.joinGame = () => {
        NProgress.start();

        delete $localStorage.user_score;
        delete $sessionStorage.extra;
        delete $sessionStorage.options;
        delete $sessionStorage.user_questions;

        sendRequest.postRequest('/user/join-game')
                 .then (rsp => {

                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       $scope.game_state = 'transition';
                       $location.path('/dashboard/game-play');
                     }
                   }
                   else if (rsp.status == 402) {
                     Notification.error({ message: 'Insufficient credits to join game.', positionX: 'center'});
                   }
                   else if (rsp.status == 403) {
                     $scope.game_state = 'transition';
                     Notification.error({ message: 'Already in a game session.', positionX: 'center'});
                     $location.path('/dashboard/game-play');

                   }
                 });

        NProgress.done();
      };

      sendRequest.getGameState()
               .then( rsp => {
                 $scope.game_state = rsp.game_state;
                 $scope.game_timer = rsp.game_timer;
                 $scope.total_examinees = rsp.total_examinees;
               });

    }]
  };
}]);
