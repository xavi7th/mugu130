// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="buyUnits" class="ui right floated horizontal list">

  <div class="ui vertical blue compact animated button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="shop icon"></i></div>
    <div class="visible content">
      Fund Wallet
    </div>
  </div>


  <div class="ui tiny modal buyUnits transition hidden">
      <div class="header">
        Fund Wallet
      </div>

      <div id="form" class="ui segments">
        <div class="ui segment">
          <div id="session-menu" class="ui two item menu">
            <a class="item active" data-tab="online-transfer" style="background-color: #03A9F4; color:#FFF;">PAY ONLINE</a>
            <a class="item" data-tab="bank-transfer">TAP HERE TO PAY VIA AGENT</a>
          </div>
        </div>

        <div class="ui segment" style="padding-bottom: 30px;">
          <div class="ui tab active" data-tab="online-transfer">
            <div class="image content flex-center">
              <div class="ui form">
                <div class="inline field" style="text-align: center;">
                  <input type="number" placeholder="Minimum: ₦500" ng-model="requested_amount" ng-min="500">
                </div>
                <div class="actions  flex-center">
                  <pay-with-paystack></pay-with-paystack>
                  <div class="ui black left deny button">
                  Close
                  </div>
                </div>
                <div class="ui message">
                  <div class="header">
                    NB:
                  </div>
                  <p>This transaction will attract a charge of 1.7%. Also, transactions ranging from ₦2,500 and above will attract an additional fixed charge of ₦100.</p>
                  <p>If your wallet is not funded as soon as your online payment is successful, kindly send an email to hello@fastplay24.com immediately. </p>
                </div>
              </div>
            </div>

            <div class="ui segments" id="info-images">
              <div class="ui segment">
                <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
                <p></p>
              </div>
              <div class="ui secondary segment">
                <p>
                  <img src="/img/paystack_preview.png" alt="" />
                </p>
              </div>
            </div>
          </div>
          <div class="ui tab" data-tab="bank-transfer">
            <div class="actions  flex-center">
              <div class="ui black left deny button">Close</div>
            </div>
            <div class="ui segment" id="extra">
              <div class="ui header">FASTPLAY24 PAYMENT AGENT</div>

              <p>
                <b>Minimum amount:</b> ₦600 (₦100 agency fee included)
              </p>

              <p>
                <b>Payment Agent:</b> Simeon
              </p>
              <p>
                <b>Account Number:</b> 3088711170 (First Bank)
              </p>
              <p>
                <b>WhatsApp Number:</b> <a href="https://api.whatsapp.com/send?phone=2347067420064 ">07067420064 </a>
              </p>

              <div class="ui positive message">
                <div class="header">
                  NB:
                </div>
                <p>As soon as you make your payment send proof of payment, alongside the following details via WhatsApp:</p>
                <p>
                  <ul>
                    <li><b>Amount Paid</b></li>
                    <li><b>Full Name</b> (As it is in your FastPlay24 Account.)</li>
                    <li><b>Email Address</b> (The one you used to sign up on FastPlay24)</li>
                  </ul>
                </p>
                <p>Your wallet will be funded upon verification of payment.</p>
              </div>

              <div class="ui negative message">
                <div class="header">
                  NB:
                </div>
                <p>A ₦100 (hundred naira) fixed charge will be deducted from any amount you pay.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

</section>
`;


angular.module('buyUnits', []).directive('buyUnits', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{},
    template:url,
    replace: true,
    controller: ['$scope',  ($scope) => {

      $scope.amt_per_unit = 1;

      $scope.openModal = () => {
        $('#session-menu .item').tab();
        $('.ui.modal.buyUnits')
          .modal({
            allowMultiple: false,
            centered: false,
            blurring: true,
            onDeny    : function(){
                 return true;
               },
              onHide    : function(){
                var remove = () => {
                };
                setTimeout(remove, 1000);
              },
              onApprove : function() {
                return true;
              }
            })
          .modal('show');
      };

      $scope.awardCredits = () => {

        sendRequest.postRequest('/user/credit-account', {'amt': $scope.requested_amount})
                 .then(function (rsp) {
                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       Notification.primary({ message: 'Units added to account', positionX: 'center'});
                       $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units + $scope.requested_amount;
                       $scope.requested_amount = null;
                     }
                   }
                 });

      };

      $scope.$on('$routeChangeStart', function() {
        $timeout(function () {
          if ($('.ui.modal.buyUnits').length > 1) {
            //remove extras
            $('.ui.modal.buyUnits')[1].remove();
          }
        }, 0);
      });

    }]
  };
}]);
