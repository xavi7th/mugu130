// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="payWithPaystack" class="ui right floated horizontal list">
  <button ng-class="{'ui blue right labeled icon button': true, 'disabled': !requested_amount}"  type="button" name="pay_now" id="pay-now" title="Pay now"  ng-click="saveOrderThenPayWithPaystack()">
    Pay Online
    <i class="credit card outline icon"></i>
  </button>
</section>
`;

angular.module('payWithPaystack', []).directive('payWithPaystack', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template:url,
    replace: true,
    link: (scope, element)=>{
      var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('charset', 'utf-8');
        scriptTag.attr('src', 'https://js.paystack.co/v1/inline.js');
        element.append(scriptTag);
    },
    controller: ['$scope', '$location',  ($scope, $location) => {

      $scope.saveOrderThenPayWithPaystack = () => {

            $scope.awardCredits()
                  .then(function (rsp) {
                    $scope.payWithPaystack();
                  },
                  function (err) {
                    alert('Network Error. Please refresh the page and try again.');
                  });
      };

      $scope.payWithPaystack = () => {
            let fees = 0.017 * $scope.requested_amount;

            if ($scope.requested_amount > 2500) {
              fees = (0.017 * $scope.requested_amount) + 100;
            }


            var orderid = _.random(676764765, 544765545646456);
            var handler = PaystackPop.setup({
              // This assumes you already created a constant named
              // PAYSTACK_PUBLIC_KEY with your public key from the
              // Paystack dashboard. You can as well just paste it
              // instead of creating the constant
              key: PAYSTACK_PUBLIC_KEY,
              email: $scope.$parent.userdetails.email,
              first_name: $scope.$parent.userdetails.firstname,
              last_name: $scope.$parent.userdetails.lastname,
              phone: $scope.$parent.userdetails.phone1,
              amount: ($scope.requested_amount + fees) * 100,
              ref: orderid,
              metadata: {
                  cartid: orderid,
                  orderid: orderid,
                  custom_fields: [ // to be displayed on paystack transaction page and paystack email.
                                {
                                  display_name: "Paid on",
                                  variable_name: "paid_on",
                                  value: 'Website'
                                },
                                {
                                  display_name: "Paid via",
                                  variable_name: "paid_via",
                                  value: 'Inline Popup'
                                },
                                {
                                  display_name: "User Details",
                                  variable_name: "user_details",
                                  value: $scope.$parent.userdetails.firstname + ' ' + $scope.$parent.userdetails.lastname + ': ' + $scope.$parent.userdetails.phone1
                                },
                                {
                                  display_name: "User ID",
                                  variable_name: "user_id",
                                  value: $scope.$parent.userdetails.id
                                },
                                {
                                  display_name: "Fees",
                                  variable_name: "fees",
                                  value: fees * 100
                                }
                                  ]
              },
              callback: function(response){
                Notification.warning({message:'Acknowledging payment. Please wait...', delay:20000, replaceMessage:true});


                // post to server to verify transaction before giving value
                sendRequest.postRequest('/user/credit-account?reference=' + response.reference)
                         .then(function (rsp) {
                           if (rsp.status == 200) {
                             if (rsp.data.verified) {

                               sendRequest.storeData('activeTransaction', true);

                               Notification.primary({ message: 'Units added to account', positionX: 'center'});
                                $scope.$parent.userdetails.available_units += $scope.requested_amount;
                                $scope.requested_amount = null;
                               $location.path('/dashboard/order-successful');
                              } else {
                                Notification.error('Automatic transction verification failed. Transaction will be manually verified and a sales rep will get in touch with you. Thank you.');
                              }
                           }
                         });

              },
              onClose: function(){
                $scope.requested_amount = null;
                Notification.error('Transaction cancelled by user');
              }
          });
          handler.openIframe();
          $('.buyUnits.ui.modal').modal('hide');
          Notification.warning({message:'Contacting payment gate way. Please wait...', delay:20000, replaceMessage:true});
      };

      $scope.awardCredits = () => {

        var data = {
          'amt': $scope.requested_amount,
          'trans_type': 'wallet funding',
          'status': 'pending',
        };

        return sendRequest.postRequest('/user/send-credit-account-request', data)
                 .then(function (rsp) {
                   if (rsp.status == 200) {
                     if (rsp.data.status) {
                       return true;
                     }
                   }
                 });

      };

    }]
  };
}]);
