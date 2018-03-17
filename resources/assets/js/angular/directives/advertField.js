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




home.directive('advertField', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    scope:{
      sidebar : '=',
      fn: '&'
    },
    templateUrl:'angular/directive-templates/advertField.php',
    replace: true,
    controller: ['$scope', function ($scope) {
      $scope.old = {};

      // //pass the value of the parent scope into the child scope so that it will display in the input field
      $scope.old.advertname = $scope.$parent.advert.name;
      $scope.old.advertimg = $scope.$parent.advert.img;
      // $scope.old.id = $scope.$parent.advert.id;
      // //
      $scope.updateAdvert = function () {
        NProgress.start();
        if (!$scope.old.advertImage) {
          alert('Choose a new image');
        } else {
          //Send the edit Request
          sendRequest.savePageDetails('/whatever/update-advert/' + $scope.$parent.advert.id, $scope.old);
          $scope.fn();
        }
        NProgress.done();
      };

      $scope.deleteAdvert = function () {
        sendRequest.request('/whatever/delete-advert/' + $scope.$parent.advert.id);
        var removedAdvert = $scope.$parent.sidebaradverts.indexOf($scope.$parent.advert);
        $scope.$parent.sidebaradverts.splice(removedAdvert, 1);
        NProgress.done();
      };
    }]
  };
}]);
