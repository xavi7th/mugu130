

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
          <div class="description">
            {{ userdetails.address }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui blue label">
            <i class="marker icon"></i> {{ userdetails.town }}, {{ userdetails.state }}.
          </div>
          <div class="ui blue label">
            <i class="mail icon"></i> {{ userdetails.email }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui green label">
            <i class="call square icon"></i> {{ userdetails.phone1 }}
          </div>
        </div>
      </div>
    </div>
    <div class="grid-50">
      <div class="content" style="margin-bottom: 15px;">
        <div class="ui orange image label">
          My Bank
          <div class="detail">{{ userdetails.bank }}</div>
        </div>

        <button class="ui compact right floated violet button" ng-click="transferEarnings()">
          <i class="icon credit card amazon pay"></i>
          Transfer Earnings
        </button>
      </div>
      <div class="content" style="padding-bottom: 25px;">
        <div class="ui teal image label">
          Acct. No.
          <div class="detail">{{ userdetails.acct_no }}</div>
        </div>

        <make-withdrawal></make-withdrawal>

      </div>
      <div class="content" style="padding-bottom: 25px;">
        <div class="ui purple image label">
          Acct. Name.
          <div class="detail">{{ userdetails.firstname }} {{ userdetails.lastname }}</div>
        </div>

        <buy-units></buy-units>
      </div>
      <div class="content" style="padding-bottom: 5px;">
        <div class="ui compact segment">
          <div class="ui blue image label">
            Referral link
            <div class="detail" id="refcode" ng-click="copy()" style="cursor: pointer;" title="Click to copy">https://fastplay24.com/register/ref/{{ userdetails.refcode }}</div>
            <input type="text" ng-hide="true" id="hiddenref">
          </div>
          <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
            <br />
            <strong style="float: left; margin-right: 15px;>INVITE SOMEONE:</strong>
            <a class="ui facebook icon button" href="https://www.facebook.com/sharer/sharer.php?u=https://fastplay24.com/register/ref/{{ userdetails.refcode }}" target="_blank">
              <i class="facebook f icon"></i>
            </a>
            <a class="ui twitter button icon" ng-href="https://twitter.com/intent/tweet?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ userdetails.refcode }} Thank me later. #fastplay24" title="Tweet">
              <i class="twitter icon"></i>
            </a>
            <a class="ui black button icon" href="mailto:?subject=Join FastPlay24&body=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ userdetails.refcode }} Thank me later." title="Email">
              <i class="envelope outline icon"></i>
            </a>
          </div>
        </div>

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
