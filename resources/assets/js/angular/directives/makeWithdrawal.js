// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="makeWithdrawal" class="ui right floated horizontal  list">
  <div class=" ui vertical animated orange compact button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="icon money bill alternate outline"></i></div>
    <div class="visible content">
      Cash Out
    </div>
  </div>


  <div class="ui tiny modal makeWithdrawal transition hidden">

      <div class="ui icon mini message">
        <i class="inbox icon"></i>
        <div class="content">
          <div class="header">
            TRANSFER EARNINGS FIRST
          </div>
          <p> To cashout your earnings, first transfer it to your wallet by clicking the 'transfer earnings' button. Otherwise proceed.</p>
        </div>
      </div>

      <div class="header">
        Enter an Amount
      </div>
      <div class="image content flex-center">
        <div class="ui form">
          <div class="inline field">
            <input type="number" placeholder="Max {{ $parent.userdetails.available_units | currency }}" ng-model="requested_amount" ng-max="$parent.userdetails.available_units" ng-min="170">
          </div>
        </div>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Close
        </div>
        <div ng-class="{'ui positive right labeled icon button': true, 'disabled': !requested_amount}" prompt-password="requestWithdrawal()">
          Yep, proceed!
          <i class="checkmark icon"></i>
        </div>
      </div>
      <div class="image content" style="flex-direction:column;">
        <div class="ui icon mini message positive">
          <i class="inbox icon"></i>
          <div class="content">
            <div class="header">
              NOTE:
            </div>
            <p> For withdrawals below ₦1000, a service fee of ₦70 will be charged. </p>
            <p> While an additional service fee of ₦70 will be charged for every ₦5000.</p>
          </div>
        </div>
        <div class="ui icon mini message negative">
          <i class="inbox icon"></i>
          <div class="content">
            <div class="header">
              NOTE:
            </div>
            <p> NB: If you do not receive the requested amount within 48 hours, kindly send an email to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a>. </p>
          </div>
        </div>
        <div class="ui icon mini message">
          <i class="inbox icon"></i>
          <div class="content">
            <div class="header">
              NOTE:
            </div>
            <p> Withdrawals below ₦1000 will be sent to your registered phone number as credit. </p>
            <p> While withdrawals above ₦1000 will be sent to your registered bank account.</p>
          </div>
        </div>
      </div>

    </div>

</section>
`;


angular.module('makeWithdrawal', []).directive('makeWithdrawal', ['$timeout', '$route','Notification', 'sendRequest', function ($timeout, $route, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.openModal = () => {
        $('.ui.modal.makeWithdrawal')
          .modal({
            centered: false,
            blurring: true,
            onDeny    : function(){
                 return true;

               },
              onHide    : function(){
                var remove = () => {
                  // $('.ui.modal.makeWithdrawal').remove();
                };
                setTimeout(remove, 1000);
                // return false;
              },
              onApprove : function() {
                return true;
              }
            })
          .modal('show');
      };

      $scope.requestWithdrawal = () => {

        sendRequest.postRequest('/user/request-withdrawal', {'amt': $scope.requested_amount})
                 .then(function (rsp) {
                   if (rsp.status == 422) {
                     Notification.error(rsp.data.message);
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       if ($scope.requested_amount < 1000) {
                         Notification.primary('Amount requested will be sent as airtime to ' + $scope.$parent.userdetails.phone1);
                       }
                       else {
                         Notification.primary({ message: 'Amount requested will be sent to account number ' + $scope.$parent.userdetails.acct_no, positionX: 'center'});
                       }

                       $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units - $scope.requested_amount;
                       $scope.requested_amount = null;
                     }
                   }
                 });

      };

      $scope.$on('$routeChangeStart', function() {
        $timeout(function () {
          if ($('.ui.modal.makeWithdrawal').length > 1) {
            //remove extras
            $('.ui.modal.makeWithdrawal')[1].remove();
          }
        }, 0);
      });

    }]
  };
}]);
