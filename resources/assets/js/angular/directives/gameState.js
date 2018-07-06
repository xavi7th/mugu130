// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = `
<div id="game">
  <div id="card" class="ui segments" ng-if="game_state == 'loading' && !transition">
    <!-- game load -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
        <span>Countdown to next game</span>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
      <button>Next game</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'waiting' && !transition">
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

      <div class="ui labeled button" tabindex="-1" ng-if="user_score == null">
        <div class="ui green button">
          <i class="fork icon"></i> Score
        </div>
        <a class="ui basic green left pointing label">
          Awaiting results
        </a>
      </div>

      <div class="ui labeled button" tabindex="-1" ng-if="user_score < 10">
        <div class="ui red button">
          <i class="fork icon"></i> Score
        </div>
        <a class="ui basic red left pointing label">
          {{ user_score }} out of 10
        </a>
      </div>
      <div class="ui labeled button" tabindex="-1" ng-if="user_score > 9">
        <div class="ui basic blue button">
          <i class="fork icon"></i> Score
        </div>
        <a class="ui basic left pointing blue label">
        {{ user_score }} out of 10
        </a>
      </div>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'active' && !transition">
    <!-- game active -->
    <div class="ui segment">
      <div class="ui label" style="background-color: #21BA45; color: #fff; font-size: 13px;">
        <span>Game in progress</span>
      </div>
    </div>
    <div class="ui segment">
      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
      <button style="cursor: pointer; background-color: #21BA45;" ng-click="joinGame()" ng-disabled="transition">Join Game</button>
    </div>
  </div>

  <div id="card" class="ui segments" ng-if="game_state == 'paused' && !transition">
    <!-- game paused -->
    <div class="ui segment">
      <div class="ui horizontal list">
        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">
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

  <div id="card" class="ui segments">
    <div class="content" style="padding-bottom: 5px;">
      <div class="ui compact segment">
        <div class="ui blue image label">
          My referral link
          <div class="detail" id="refcode" ng-click="copy()" style="cursor: pointer;" title="Click to copy">https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}</div>
          <input type="text" ng-hide="true" id="hiddenref">
        </div>
        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
          <br />
          <strong style="margin-right: 15px; color:#555!important;"">INVITE SOMEONE AND GET PAID:</strong>
          <br />
          <br />
          <a class="ui facebook icon button" href="https://www.facebook.com/sharer/sharer.php?u=https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}" target="_blank">
            <i class="facebook f icon"></i>
          </a>
          <a class="ui twitter button icon" ng-href="https://twitter.com/intent/tweet?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Tweet" target="_blank">
            <i class="twitter icon"></i>
          </a>
          <a class="ui black button icon" href="mailto:?subject=Join FastPlay24&body=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later." title="Email">
            <i class="envelope outline icon"></i>
          </a>
          <a class="ui green button icon" ng-href="whatsapp://send?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Whatsapp Share">
              <i class="whatsapp icon"></i>
            </a>
        </div>
      </div>

    </div>
  </div>
</div>

`;



angular.module('gameState', []).directive('gameState', ['$location', '$route', 'Notification', '$localStorage', 'sendRequest', function ($location, $route, Notification, $localStorage, sendRequest) {
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

      $scope.transition = true;

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      //when the game was paused, ends the user's incomplete game and displays the results
      $scope.endGameReload = function () {
        $scope.transition = true;
        alert('The game has ended');
        //Send a request to end the user's game and redirect to results display page
        sendRequest.postRequest('/user/end-exam', $localStorage.user_questions)
                 .then(function (rsp) {
                   delete $localStorage.user_questions;
                   delete $localStorage.extra;
                   delete $localStorage.options;

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
        $scope.transition = true;

        sendRequest.postRequest('user/resume-game')
                    .then(()=>{
                      $location.path('/dashboard/game-play');
                    });

        //Send a request to resume the game and set the session back to active

        // $scope.displayResults();
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
        $scope.transition = true;


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
        $scope.transition = true;

        NProgress.start();

        delete $localStorage.user_score;
        delete $localStorage.extra;
        delete $localStorage.options;
        delete $localStorage.user_questions;

        sendRequest.postRequest('/user/join-game')
                 .then (rsp => {

                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       $scope.transition = true;
                       $location.path('/dashboard/game-play');
                     }
                   }
                   else if (rsp.status == 402) {
                     $scope.transition = false;
                     Notification.error({ message: 'Insufficient credits to join game.', positionX: 'center'});
                   }
                   else if (rsp.status == 403) {
                     $scope.transition = true;
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
                 $scope.transition = false;
               });

    }]
  };
}]);
