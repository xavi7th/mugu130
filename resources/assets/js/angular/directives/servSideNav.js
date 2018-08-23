// This directive just repeats the category input fields and creates an empty isolate scope so that the model does not conflict on the parent scope

// EXAMPLE uploadPostImage
// <custom-file-upload dest="'u32/'" mdl="post.postImage" attr="postImage" altText="Post Image Upload"></custom-file-upload>

// EXAMPLE templateUrl
// <div class="form-group">
//   <div class="col-sm-8">
//     <div class="input-group">
//       <custom-file-upload dest="'ShowCase/'" mdl="old.advertImage" attr="advertImage"></custom-file-upload>
//       <span class="input-group-addon">
//         <img ng-src="{{old.advertimg}}" alt="Advert Image" style="max-width:100px;">
//       </span>
//     </div>
//   </div>
//   <div class="col-sm-4">
//     <div class="input-group">
//       <input id="advertname" type="text" class="form-control" name="advertname" ng-model="old.advertname" placeholder="Name" ng-readonly="true">
//       <span class="input-group-btn">
//         <a ng-click="updateAdvert()" class="btn btn-success" ng-disabled="!old.advertImage">Update</a>
//         <a ng-click="deleteAdvert()" class="btn btn-danger" ng-if="sidebar">Delete</a>
//       </span>
//     </div>
//   </div>
//   <div class="clearfix"></div>
//   <br>
//   <div class="divider-dashed"></div>
// </div>


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
      scope.$parent.loading = true;

      sendRequest.request(route_root + scope.url)
                .then(function (rsp) {
                    scope.$parent.data = rsp.details.data;
                    scope.first_page_url = rsp.details.first_page_url;
                    scope.last_page_url = rsp.details.last_page_url;
                    scope.prev_page_url = rsp.details.prev_page_url;
                    scope.next_page_url = rsp.details.next_page_url;
                    scope.current_page = rsp.details.current_page;
                    scope.last_page = rsp.details.last_page;
                    scope.$parent.total = rsp.details.total;
                    scope.$parent.extras = rsp.extras;
                    scope.$parent.loading = false;
                    NProgress.done();
                },
              err => {
                Notification.error('Error retrieving data from server');
              });


      // Make a request to the server using the url provided from Laravel's paginate method
      scope.reveal = url => {
        NProgress.start();
        scope.$parent.loading = true;

        sendRequest.request(url)
                    .then(rsp => {
                      scope.$parent.data = rsp.details.data;
                      scope.first_page_url = rsp.details.first_page_url;
                      scope.last_page_url = rsp.details.last_page_url;
                      scope.prev_page_url = rsp.details.prev_page_url;
                      scope.next_page_url = rsp.details.next_page_url;
                      scope.current_page = rsp.details.current_page;
                      scope.$parent.total = rsp.details.total;
                      scope.$parent.extras = rsp.extras;
                      scope.$parent.loading = false;
                      NProgress.done();
                    });
      };

    }]
  };
}]);
