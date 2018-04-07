// EXAMPLE
// <game-play></game-play>


var url = `
<section class="ui segment red"  id="content-context">
      <div >
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Session</th>
              <th>Joined At</th>
              <th>Finished At</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="gamer in live_session">
              <td>{{ $index + 1 }}</td>
              <td>{{ gamer.user.firstname }} {{ gamer.user.lastname }}</td>
              <td>{{ gamer.id }}</td>
              <td>{{ gamer.created_at }}</td>
              <td>{{ gamer.ended_at }}</td>
              <td>{{ gamer.score }}</td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`;


angular.module('liveGameSession', []).directive('liveGameSession', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      sendRequest.postRequest(route_root + '/api/get-live-game-session')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.live_session = rsp.data.live_session;
                    }
                  });

    }]
  };
}]);
