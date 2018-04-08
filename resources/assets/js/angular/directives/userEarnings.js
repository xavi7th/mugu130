// EXAMPLE
// <earning-play></earning-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div ng-show="!earningrecord">
      <table class="ui  striped celled table">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          <tr ng-repeat="u in users">
            <td>{{ $index + 1 }}</td>
            <td>{{ u.firstname }} {{ u.lastname }}</td>
            <td>{{ u.email }}</td>
            <td>
              <div class="ui mini buttons">
                <button class="ui purple button" ng-click="viewEarnings(u)">View Earnings</button>
              </div>
            </td>
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
              <td ng-click="viewGameRecord(earning)" style="cursor:pointer;"> {{ username }} </td>
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


angular.module('userEarnings', []).directive('userEarnings', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
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

      $scope.viewEarnings = (u) => {
        $scope.username = u.firstname + ' ' + u.lastname;
        sendRequest.postRequest(route_root + '/api/get-all-user-earnings', u)
                    .then( rsp => {
                      console.log(rsp);
                      if (rsp.status == 200) {
                        $scope.earningrecord = true;
                        $scope.earnings = rsp.data.earnings;
                      }
                    });
      };

      $scope.goBack = () => {
        $scope.earningrecord = false;

      };

      sendRequest.postRequest(route_root + '/api/get-users-page-details')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.users = rsp.data.users;
                      NProgress.done();
                    }
                  });

    }]
  };
}]);
