
let url = `
<tfoot>
  <style>
    tfoot{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  </style>
  {{ extras }}
  <tr>
    <th colspan="3">
      <div class="ui right floated pagination menu">
        <a class="icon item" ng-click="reveal(first_page_url)" ng-disabled="!first_page_url">
          <i class="left chevron icon"></i>
          <i class="left chevron icon"></i>
          &nbsp;&nbsp;&nbsp; First Page
        </a>
        <a class="icon item" ng-click="reveal(prev_page_url)" ng-disabled="!prev_page_url">
          <i class="left chevron icon"></i>
          &nbsp;&nbsp;&nbsp; Previous Page
        </a>
        <a class="item">Current Page: {{ current_page }} of {{ last_page }}</a>
        <a class="icon item"  ng-click="reveal(next_page_url)" ng-disabled="!next_page_url">
          Next Page &nbsp;&nbsp;&nbsp;
          <i class="right chevron icon"></i>
        </a>
        <a class="icon item"  ng-click="reveal(last_page_url)" ng-disabled="!last_page_url">
          Last Page &nbsp;&nbsp;&nbsp;
          <i class="right chevron icon"></i>
          <i class="right chevron icon"></i>
        </a>
      </div>
    </th>
  </tr>
</tfoot>
`;

angular.module('servSideNav', []).directive('servSideNav', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    scope:{
      url : '=',
      // fn: '&'
    },
    template: url,
    replace: true,
    controller: ['$scope', function (scope) {
      NProgress.start();
      scope.$parent.$parent.loading = true;

      sendRequest.request(route_root + scope.url)
                .then(function (rsp) {
                    scope.$parent.$parent.data = rsp.details.data;
                    scope.first_page_url = rsp.details.first_page_url;
                    scope.last_page_url = rsp.details.last_page_url;
                    scope.prev_page_url = rsp.details.prev_page_url;
                    scope.next_page_url = rsp.details.next_page_url;
                    scope.current_page = rsp.details.current_page;
                    scope.last_page = rsp.details.last_page;
                    scope.$parent.$parent.total = rsp.details.total;
                    scope.$parent.$parent.extras = rsp.extras;
										scope.$parent.$parent.loading = false;
										scope.$parent.$parent.searching = false;

                    NProgress.done();
                },
              err => {
                Notification.error('Error retrieving data from server');
              });


      // Make a request to the server using the url provided from Laravel's paginate method
      scope.reveal = url => {
        NProgress.start();
        scope.$parent.$parent.loading = true;

        sendRequest.request(url)
                    .then(rsp => {
                      scope.$parent.$parent.data = rsp.details.data;
                      scope.first_page_url = rsp.details.first_page_url;
                      scope.last_page_url = rsp.details.last_page_url;
                      scope.prev_page_url = rsp.details.prev_page_url;
                      scope.next_page_url = rsp.details.next_page_url;
                      scope.current_page = rsp.details.current_page;
                      scope.$parent.$parent.total = rsp.details.total;
                      scope.$parent.$parent.extras = rsp.extras;
                      scope.$parent.$parent.loading = false;
                      scope.$parent.$parent.searching = false;
                      NProgress.done();
                    });
      };

    }]
  };
}]);
