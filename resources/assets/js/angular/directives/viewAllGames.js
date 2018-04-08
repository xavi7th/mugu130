// EXAMPLE
// <game-play></game-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div ng-show="!gamerecord">
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Status</th>
              <th>Session</th>
              <th>Number of Players</th>
              <th>Max Winners</th>
              <th>Total Winners</th>
              <th>Total Prize</th>
              <th>Amount Won</th>
              <th>Started At</th>
              <th>Finished At</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="game in games">
              <td>{{ $index + 1 }}</td>
              <td ng-click="viewGameRecord(game)" style="cursor:pointer;">{{ game.status }}</td>
              <td>{{ game.id }}</td>
              <td>{{ game.num_of_players }}</td>
              <td>{{ game.max_winners }}</td>
              <td>{{ game.total_prize }}</td>
              <td>{{ game.total_winners }}</td>
              <td>{{ game.amount_won }}</td>
              <td>{{ game.created_at }}</td>
              <td>{{ game.ended_at }}</td>
            </tr>

          </tbody>
        </table>
      </div>

      <div ng-show="gamerecord">
      <div class="ui teal buttons">
        <button class="ui labeled icon button" ng-click="goBack()">
          <i class="left chevron icon"></i>
          Go Back
        </button>
      </div>
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Status</th>
              <th>Session</th>
              <th>Player Name</th>
              <th>Payment Status</th>
              <th>Score</th>
              <th>Earning</th>
              <th>Position</th>
              <th>Started At</th>
              <th>Finished At</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="game in games_records">
              <td>{{ $index + 1 }}</td>
              <td>{{ game.status }}</td>
              <td>{{ game.game_id }}</td>
              <td>{{ game.user.firstname }} {{ game.user.lastname }}</td>
              <td>{{ game.payment_status }}</td>
              <td>{{ game.score }}</td>
              <td>{{ game.earning }}</td>
              <td>{{ game.position }}</td>
              <td>{{ game.created_at }}</td>
              <td>{{ game.ended_at }}</td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`;


angular.module('viewAllGames', []).directive('viewAllGames', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {
      $scope.gamerecord = false;
      $scope.viewGameRecord = (game) => {
        console.log(game);
        sendRequest.postRequest(route_root + '/api/get-game-records', game)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        $scope.gamerecord = true;
                        $scope.$parent.active = 'gameRecord';
                        $scope.games_records = rsp.data.games_records;
                      }
                    });
      };

      $scope.goBack = () => {
        $scope.gamerecord = false;
        $scope.$parent.active = 'allGames';

      };

      sendRequest.postRequest(route_root + '/api/get-all-games')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.games = rsp.data.games;
                    }
                  });
    }]
  };
}]);
