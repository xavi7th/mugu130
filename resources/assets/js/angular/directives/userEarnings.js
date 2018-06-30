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

          <tr ng-repeat="u in data | filter : search" class="animate translate-in">
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
        <serv-side-nav url="'/api/get-users-page-details'"></serv-side-nav>
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
              <td ng-if="earning.game_id">{{ earning.game_id }}</td>
              <td ng-if="!earning.game_id">REFERRAL BONUS</td>
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


angular.module('userEarnings', []).directive('userEarnings', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
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

      // sendRequest.postRequest(route_root + '/api/get-users-page-details')
      //             .then( rsp => {
      //               if (rsp.status == 200) {
      //                 $scope.users = rsp.data.users;
      //                 NProgress.done();
      //               }
      //             });

    }]
  };
}]);
