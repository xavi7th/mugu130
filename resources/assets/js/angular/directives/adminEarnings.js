// EXAMPLE
// <earning-play></earning-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
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

            <tr ng-repeat="earning in earnings">
              <td>{{ $index + 1 }}</td>
              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> Admin </td>
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


angular.module('adminEarnings', []).directive('adminEarnings', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
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

      sendRequest.postRequest(route_root + '/api/get-all-admin-earnings')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.earnings = rsp.data.earnings;
                      NProgress.done();
                    }
                  });

    }]
  };
}]);
