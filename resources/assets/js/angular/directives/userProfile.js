

var url = `
<section id="u_details">
  <div class="grid-container">
    <div class="grid-50">
      <div class="content">
        <h2 class="header" style="margin-bottom: 2px;">{{ userdetails.firstname }} {{ userdetails.lastname }}</h2>
        <div class="content" style="padding-bottom: 5px;">
          <div class="meta">
            <span class="date">Joined {{ userdetails.created_at | timeAgo }}</span>
          </div>

        </div>
        <div class="content" >

        </div>
        <div class="content" style="padding-bottom: 5px;">

        </div>
      </div>
    </div>
    <div class="grid-50">
      <div class="content">
        <button class="ui compact right floated violet button" ng-click="transferEarnings()">
          <i class="icon credit card amazon pay"></i>
          Transfer Earnings
        </button>
      </div>
      <div class="content">
        <make-withdrawal  style="margin-right: 3%; margin-bottom: 15px;"></make-withdrawal>
      </div>
      <div class="content" style="margin-bottom: 15px;">
        <a class="ui vertical blue compact button right floated" href="/dashboard/fund-wallet" style="margin-right: 3%;">
          <i class="icon credit card amazon pay"></i>
          Fund Wallet
        </a>
      </div>
    </div>
  </div>
</section>
`;


angular.module('userProfile', []).directive('userProfile', [function () {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/userProfileTemplate.php',
    template:url,
    replace: true,
    link: function(scope, element, attributes){


		},
    controller: ['$scope', 'Notification', 'sendRequest', function ($scope, Notification, sendRequest) {

      $scope.copy = () => {
        console.log($('#refcode'));
        $('#hiddenref').val($('#refcode').text());
        $('#hiddenref').select();
        document.execCommand('Copy');
        Notification.primary('Referral code copied');
      };

      $scope.transferEarnings = () => {
        sendRequest.postRequest('user/transfer-earnings')
                  .then(rsp => {
                    if (rsp.status == 200) {
                      if (rsp.data.status == true) {
                        Notification.success({message: 'Earnings transferred to wallet', positionX: 'center'});
                      }
                      else if(rsp.data.status == 'Insufficient'){
                        Notification.error({message: 'No earnings to transfer', positionX: 'center'});
                      }
                    }

                    sendRequest.getUserDetails('/user/get-user-details', true)
                                .then( (rsp) => {
                                  $scope.userdetails = rsp.userdetails;
                                });
                    sendRequest.getTotalEarnings('/user/get-total-earnings', true)
                                .then(function (rsp) {
                                  $scope.total_earnings = rsp.total_earnings;
                                });
                  });
      };
    }]
  };
}]);
