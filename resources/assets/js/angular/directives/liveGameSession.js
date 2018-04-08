// EXAMPLE
// <game-play></game-play>


var url = `
<section class="ui segment red"  id="content-context" style="  max-height: 60vh; overflow: auto;">
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
              <td>{{ gamer.game_id }}</td>
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
    scope: {},
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope', '$timeout',  ($scope, $timeout) => {


      sendRequest.postRequest(route_root + '/api/get-live-game-session')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.live_session = rsp.data.live_session;
                    }
                  });

         $timeout(function () {
           Echo.leave('new_member_joined');
           Echo.channel(`new_member_joined`)
           .listen('NewMemberJoined', (e) => {
             new_session = e.new_session;
             new_session.user = e.new_member;
             $scope.live_session.push(new_session);
             $scope.$apply();
            //  $scope.total_examinees = e.total_examinees;
           });
         }, 0);
    }]
  };
}]);
