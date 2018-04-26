// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="verifyAccount" class="ui left floated horizontal  list">
  <div class="ui labeled button" tabindex="-1" ng-if="userdetails.verified">
    <div class="ui blue label" style="background-color: #03A9F4;">
      <i class="check circle icon"></i>
    </div>
  </div>

  <div class="ui labeled button" tabindex="-1" ng-click="sendVerificationMail()" ng-if="!userdetails.verified">
    <div class="ui red label right pointing">
      <i class="exclamation triangle icon"></i>
    </div>
    <a class="ui basic red label ng-binding">Verify now</a>
  </div>
</section>
`;


angular.module('verifyAccount', []).directive('verifyAccount', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    // scope:{
    //   // dest : '=',
    //   // mdl:'=',
    //   // attr: '=',
    //   // altText: '='
    // },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.sendVerificationMail = () => {

        Notification.warning({message: 'Attempting to send verification email...', delay: 2000});

        sendRequest.postRequest('/user/send-verification-mail', $scope.userdetails.email)
                 .then(function (rsp) {
                   if (rsp.status == 422 || rsp.status == 408) {
                     Notification.error({message: rsp.data.message, delay : 1500, replace : true});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.message) {
                        // Notification.success('Verification mail sent to ' + $scope.userdetails.email);
                        Notification.success({message: rsp.data.message, replace: true});
                     }
                   }
                 });

      };

    }]
  };
}]);
