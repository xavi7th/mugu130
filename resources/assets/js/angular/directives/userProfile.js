

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
          <div class="ui green label">
            <i class="call square icon"></i> {{ userdetails.phone2 }}
          </div>
        </div>
        <div class="content" style="padding-bottom: 5px;">
          <div class="ui blue image label">
            Last seen
            <div class="detail">2 weeks ago</div>
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
      <div class="content" style="padding-bottom: 5px;">
        <div class="ui red image label">
          Referral code
          <div class="detail">{{ userdetails.refcode }}</div>
        </div>

        <buy-units></buy-units>

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

			// console.log(attributes); //literal string "{{some string}}", no interpolation
			// console.log(element); //literal string "{{some string}}", no interpolation
			// console.log(attributes.anotherParam); //literally "another string"
      element.children( 'input[type="file"]' ).attr('id', attributes.attr);
      element.children( 'input[type="file"]' ).attr('name', attributes.attr);
      element.children( 'img' ).attr('alt', attributes.altText);
			// attributes.$observe('myDirective', function(value){
			// 	console.log(value);
			// });
      //
			// attributes.$observe('anotherParam', function(value){
			// 	console.log(value);
			// });

		},
    controller: ['$scope', 'Notification', 'sendRequest', function ($scope, Notification, sendRequest) {

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
