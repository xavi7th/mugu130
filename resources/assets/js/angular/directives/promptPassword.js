// EXAMPLE uploadPostImage
// <game-play></game-play>
// <button ng-class="['ui purple button', {'loading':verifying}]" confirm-action="verifyUser(u)" ng-hide="u.verified">Verify</button>


angular.module('promptPassword', []).directive('promptPassword', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: (scope, el, attrs) => {

      var msg =  "Enter your password";
      var clickAction = attrs.promptPassword;
      el.bind('click',function (event) {
        var pwd = window.prompt(msg);
        sendRequest.postRequest('/user/confirm-user-password', pwd)
                 .then( (rsp) => {
                   if (rsp.status == 423) {
                     Notification.error('Incorrect password');
                     $scope.logout();
                   }
                   else if (rsp.status == 200){
                     if (rsp.data.status) {
                       scope.$eval(clickAction);
                     }
                   }
                 });
      });
		}
  };
}]);
