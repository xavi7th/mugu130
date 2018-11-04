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
      <div class="content flex-center">
        <div class="ui form" id="input-field">
          <div class="field">
            <input type="number" placeholder="Min ₦1,000 | Max: ₦50, 000" ng-model="requested_amount" ng-max="withdrawal_max" ng-min="1000">
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
            <p> For withdrawals from ₦1,000 and above, a service fee of ₦140 will be charged. </p>
            <p> While an additional service fee of ₦70 will be charged for every additional ₦1,000.</p>
            <p> You cannot cashout between 5pm on Friday to 7:59am on Monday. Weekend rest is good you know.</p>
          </div>
        </div>
        <div class="ui icon mini message negative">
          <i class="inbox icon"></i>
          <div class="content">
            <div class="header">
              NOTE:
            </div>
            <p> NB: If you do not receive the requested amount in your bank account within 72 hours after the time of request, kindly send an email to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a>. </p>
          </div>
        </div>
      </div>

    </div>

</section>
`;


angular.module('makeWithdrawal', []).directive('makeWithdrawal', ['$timeout', '$location','Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
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
                         sendRequest.storeData('withdraw', true);
                         $location.path('dashboard/withdrawal/success');
                         Notification.primary({ message: 'Amount requested will be sent to account number (' + $scope.$parent.userdetails.acct_no + ' - ' + $scope.$parent.userdetails.bank + ') within 72 hours', positionX: 'center'});
                       }

                       $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units - $scope.requested_amount;
                       $scope.requested_amount = null;
                     }
                   }
                 });

      };

      $timeout(function () {
        //This prevent the dashboard from crashing on page load where the parent scope may not yet be ready
        $scope.withdrawal_max = $scope.$parent.userdetails.available_units < 50000 ? $scope.$parent.userdetails.available_units : 50000;
      }, 1000);

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
