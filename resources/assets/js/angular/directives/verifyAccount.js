// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="verifyAccount" class="ui right floated horizontal  list">
  <div class="ui labeled button" tabindex="-1" ng-if="userdetails.verified">
    <div class="ui green  right pointing label">
      Verified
    </div>
    <a class="ui basic green label">
      <i class="thumbs up outline icon"></i>
    </a>
  </div>

  <div class="ui labeled button" tabindex="-1" ng-click="sendVerificationMail()" ng-if="!userdetails.verified">
    <div class="ui red  right pointing label">
       Unverified
    </div>
    <a class="ui basic red label">
      <i class="thumbs down outline icon"></i>
    </a>
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

        Notification.warning('Attempting to send verification email...');

        sendRequest.postRequest('/user/send-verification-mail', $scope.userdetails.email)
                 .then(function (rsp) {
                   if (rsp.status == 422) {
                     Notification.error({message: rsp.data.message, delay : 1500, replace : true});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.message) {
                        // Notification.success('Verification mail sent to ' + $scope.userdetails.email);
                        Notification.success({message: rsp.data.message});
                     }
                   }
                 });

      };

    }]
  };
}]);
