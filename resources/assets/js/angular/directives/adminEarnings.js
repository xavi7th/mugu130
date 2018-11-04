// EXAMPLE
// <earning-play></earning-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div class="ui segment compact left floated">
        <div class="ui horizontal statistic">
            <div class="value">
              {{ total }}
            </div>
            <div class="label">
              Earnings
            </div>
          </div>
      </div>
      <br>
      <withdraw-admin-earnings class="right floated"></withdraw-admin-earnings>
      <div class="ui labeled button" tabindex="-1">
        <div class="ui button">
          <i class="heart icon"></i> Total Transferred
        </div>
        <a class="ui basic label">
          {{ extras.total_transferred | currency }}
        </a>
      </div>
      <div class="ui left labeled button" tabindex="-1">
        <a class="ui basic right pointing label">
          {{ extras.total_untransferred | currency }}
        </a>
        <div class="ui button">
          <i class="heart icon"></i> Total Untransferred
        </div>
      </div>

      <div ng-show="!earningrecord">
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

            <tr ng-repeat="earning in data | filter : search" class="animate translate-in">
              <td>{{ earning.id }}</td>
              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> Admin </td>
              <td>{{ earning.amount }}</td>
              <td ng-if="earning.game_id">{{ earning.game_id }}</td>
              <td ng-if="!earning.game_id && !earning.agent_id"> Withdrawal Fee </td>
              <td ng-if="!earning.game_id && earning.agent_id"> Agent Charges </td>
              <td>
                  <span ng-if="earning.transferred">Transferred</span>
                  <span ng-if="!earning.transferred">Untransferred</span>
              </td>
              <td>{{ earning.created_at }}</td>
            </tr>

          </tbody>
          <serv-side-nav url="'/api/get-all-admin-earnings'"></serv-side-nav>
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

            <tr ng-repeat="earning in earnings_records">
              <td>{{ $index + 1 }}</td>
              <td>{{ earning.status }}</td>
              <td>{{ earning.earning_id }}</td>
              <td>{{ earning.user.firstname }} {{ earning.user.lastname }}</td>
              <td>{{ earning.payment_status }}</td>
              <td>{{ earning.score }}</td>
              <td>{{ earning.earning }}</td>
              <td>{{ earning.position }}</td>
              <td>{{ earning.created_at }}</td>
              <td>{{ earning.ended_at }}</td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`;


angular.module('adminEarnings', []).directive('adminEarnings', ['$location', 'Notification', 'sendRequest', function ($location, Notification, sendRequest) {
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
      $scope.viewGameRecord = (earning) => {
        console.log(earning);
        sendRequest.postRequest(route_root + '/api/get-earning-records', earning)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        $scope.earningrecord = true;
                        $scope.$parent.active = 'earningRecord';
                        $scope.earnings_records = rsp.data.earnings_records;
                      }
                    });
      };

      $scope.goBack = () => {
        $scope.earningrecord = false;
        $scope.$parent.active = 'allGames';

      };

      // sendRequest.postRequest(route_root + '/api/get-all-admin-earnings')
      //             .then( rsp => {
      //               if (rsp.status == 200) {
      //                 $scope.earnings = rsp.data.earnings;
      //                 $scope.total_transferred = rsp.data.total_transferred;
      //                 $scope.total_untransferred = rsp.data.total_untransferred;
      //                 NProgress.done();
      //               }
      //             });

    }]
  };
}]);
