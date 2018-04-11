// EXAMPLE
// <message-play></message-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div ng-show="!messagerecord">
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="msg in messages">
              <td>{{ $index + 1 }}</td>
              <td>{{ msg.senderusername }}</td>
              <td  ng-click="viewMessage(msg)">{{ msg.subject }}</td>
              <td>{{ msg.read }}</td>
              <td>{{ msg.created_at | timeAgo }}</td>
              <td>
                <div class="ui mini labeled button" tabindex="-1" ng-if="!msg.read">
                  <div class="ui mini basic orange button" ng-click="markAsRead(msg)">
                    Mark as Read
                  </div>
                </div>
                <div class="ui mini labeled button" tabindex="-1">
                  <div class="ui mini red button" ng-click="deleteMessage(msg)">
                    Delete
                  </div>
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>

      <div ng-show="messagerecord" class="grid-80 prefix-10">
        <div class="ui teal buttons">
          <button class="ui labeled icon button" ng-click="goBack()">
            <i class="left chevron icon"></i>
            Go Back
          </button>
        </div>
        <div class="ui attached message">
          <div class="header">
            Message Details {{ msg_record }}
          </div>
        </div>
        <form class="ui form attached fluid segment">

        <div class="ui info message">
          <i class="close icon"></i>
          <div class="header">
            {{ msg_record.message }}
          </div>
        </div>

          <div class="field">
            <label>Reply</label>
          </div>

          <div class="field">
            <label>Subject</label>
            <input type="text" ng-model="msg_record.reply_subject">
          </div>

          <div class="field">
            <label>Message</label>
            <textarea placeholder="Message" type="text" ng-model="msg_record.reply_message"></textarea>
          </div>

          <button class="ui blue submit button" ng-click="sendMessage()" ng-disabled="!msg_record.reply_message || !msg_record.reply_subject">Submit</button>
        </form>
      </div>

</section>

`;


angular.module('displayMessages', []).directive('displayMessages', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/messagePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.messagerecord = false;

      $scope.markAsRead = (message) => {
        console.log(message);
        sendRequest.postRequest(route_root + '/api/mark-message-as-read', message)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        message.read = true;
                      }
                    });
      };

      $scope.deleteMessage = (message) => {
        console.log(message);
        sendRequest.postRequest(route_root + '/api/delete-message', message)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        var removed = $scope.messages.indexOf(message);
                        $scope.messages.splice(removed, 1);
                      }
                    });
      };

      $scope.viewMessage = (message) => {
        $scope.msg_record = message;
        $scope.messagerecord = true;
      };

      $scope.sendMessage = () => {
        NProgress.start();
        $scope.reply = {};
        $scope.reply.user_id = $scope.msg_record.sender_id;
        $scope.reply.sender_id = $scope.msg_record.user_id;
        $scope.reply.subject = $scope.msg_record.reply_subject;
        $scope.reply.message = $scope.msg_record.reply_message;

        sendRequest.postRequest(route_root + '/api/reply-message', $scope.reply)
        .then( rsp => {
          if (rsp.status == 200) {
            Notification.success('Sent');
            $scope.msg_record = null;
            NProgress.done();
          }
        });
      };

      $scope.goBack = () => {
        $scope.messagerecord = false;
      };

      sendRequest.postRequest(route_root + '/api/get-all-messages')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.messages = rsp.data.messages;
                      NProgress.done();
                    }
                  });
    }]
  };
}]);
