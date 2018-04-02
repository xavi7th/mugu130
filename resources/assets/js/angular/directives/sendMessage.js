// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<div class="ui small basic green icon buttons right floated">
  <button class="ui button active" ng-click="openModal()">
    <ng-transclude></ng-transclude>
  </button>
  <div class="ui mini modal sendMessage transition hidden">
      <div class="header">
        Send a message
      </div>
      <div class="content flex-center">
        <div class="ui form">
          <div class="field">
            <input type="text" placeholder="Message Subject" ng-model="m.subject">
          </div>
          <div class="field">
            <textarea placeholder="Message goes here" ng-model="m.message" ></textarea>
          </div>
        </div>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Bail
        </div>
        <div ng-class="{'ui positive right labeled icon button': true, 'disabled': !m.message || !m.subject}" ng-click="sendMessage()">
          Send
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>
</div>
`;


angular.module('sendMessage', []).directive('sendMessage', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{
      msg : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    transclude:true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.openModal = () => {
        $('.ui.modal.sendMessage').modal({
            blurring: true
          })
          .modal('show');
      };

      $scope.sendMessage = () => {
        sendRequest.postRequest('/user/send-message', $scope.m)
                 .then( rsp => {
                   if (rsp.data.status) {
                     Notification.primary('Message sent');
                     $scope.msg.read = true;
                     sendRequest.postRequest('/user/mark-message-as-read', $scope.msg);
                     $scope.m = null;
                   }
                 },
                 err => {
                   Notification.error('Sending Failed');
                 });
      };

    }]
  };
}]);
