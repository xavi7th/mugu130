// EXAMPLE
// <earning-play></earning-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div ng-show="!earningrecord">
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
              <td ng-click="viewEarnings(game)">{{ game.status }}</td>
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
      </table>
      </div>

      <div ng-show="earningrecord">
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
              <th>User</th>
              <th>Amount</th>
              <th>Session</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="earning in earnings">
              <td>{{ $index + 1 }}</td>
              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> {{ earning.user.firstname }} {{ earning.user.lastname }} </td>
              <td>{{ earning.amount }}</td>
              <td>{{ earning.game_id }}</td>
              <td>
                  <span ng-if="earning.transferred">Transferred</span>
                  <span ng-if="!earning.transferred">Untransferred</span>
              </td>
              <td>{{ earning.created_at }}</td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`;


angular.module('gameEarnings', []).directive('gameEarnings', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/earningPlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      NProgress.start();

      $scope.earningrecord = false;

      $scope.viewEarnings = (game) => {
        // $scope.username = u.firstname + ' ' + u.lastname;
        sendRequest.postRequest(route_root + '/api/get-all-game-earnings', game)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        $scope.earningrecord = true;
                        $scope.earnings = rsp.data.earnings;
                      }
                    });
      };

      $scope.goBack = () => {
        $scope.earningrecord = false;

      };

      sendRequest.postRequest(route_root + '/api/get-all-games')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.games = rsp.data.games;
                      NProgress.done();
                    }
                  });

    }]
  };
}]);
