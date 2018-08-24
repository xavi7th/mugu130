// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = `

<div id="mini-game">
<style>

</style>

  <div class="ui labeled button" tabindex="-1" ng-if="game_state == 'loading'">
    <div class="ui red button">
      <i class="clock icon"></i> <ng-transclude></ng-transclude> Next Game
    </div>
    <a class="ui basic red left pointing label">
      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
    </a>
  </div>


  <div class="ui labeled button" tabindex="-1" ng-if="game_state == 'active'" ng-click="joinGame()">
    <div class="ui green button">
     <ng-transclude></ng-transclude>
      <i class="gamepad icon"></i>Join Game
    </div>
    <a class="ui basic left pointing green label" ng-click="joinGame()">
        <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>
    </a>
  </div>

`;



angular.module('miniGameState', []).directive('miniGameState', ['$location', 'Notification', '$localStorage', 'sendRequest', function ($location, Notification, $localStorage, sendRequest) {
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
    transclude: true,
    link: function(scope, element, attributes){

		},
    controller: ['$scope', ($scope) => {

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

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

      $scope.joinGame = () => {
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
