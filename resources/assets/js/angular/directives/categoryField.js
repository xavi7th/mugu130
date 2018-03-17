// This directive just repeats the category input fields and creates an empty isolate scope so that the model does not conflict on the parent scope

// EXAMPLE uploadPostImage
// <custom-file-upload dest="'u32/'" mdl="post.postImage" attr="postImage" altText="Post Image Upload"></custom-file-upload>

// EXAMPLE templateUrl
// <div class="input-group">
//   <input type="text" class="form-control" value="{{$parent.category.categoryname}}" ng-model="singlecategory">
//   <span class="input-group-btn">
//     <a name="editcategory" class="btn btn-primary" ng-click="editCategory()">Edit</a>
//     <a name="deletecategory" class="btn btn-danger" ng-click="deleteCategory()">Delete</a>
//   </span>
// </div>





home.directive('categoryField', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    scope:{

    },
    templateUrl:'angular/directive-templates/categoryField.php',
    replace: true,
    controller: ['$scope', function ($scope) {

      //pass the value of the parent scope into the child scope so that it will display in the input field
      $scope.singlecategory = $scope.$parent.category.categoryname;

      $scope.editCategory = function () {
        NProgress.start();

        //Modify the parent scope so that it will reflect on the page?
        if (!$scope.singlecategory) {
          alert('Delete the category instead');
          $scope.singlecategory = $scope.$parent.category.categoryname;
        } else {
          //Send the edit Request
          sendRequest.savePageDetails('/whatever/update-category/' + $scope.$parent.category.id, $scope.singlecategory);

          $scope.$parent.category.categoryname = $scope.singlecategory;
          $scope.$parent.message = "Updated";
          $scope.$parent.messageClass = 'success';
        }



        NProgress.done();
      };

      $scope.deleteCategory = function () {
        // var confirm = prompt('Delete all Subcategories and posts under this category?');
        sendRequest.request('/whatever/delete-category/' + $scope.$parent.category.id)
                                    .then(function (data) {});
        var removedCategory = $scope.$parent.categories.indexOf($scope.$parent.category);
        $scope.$parent.categories.splice(removedCategory, 1);
      };
    }]
  };
}]);
