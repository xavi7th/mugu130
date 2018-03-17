// This directive just repeats the category input fields and creates an empty isolate scope so that the model does not conflict on the parent scope

// EXAMPLE uploadPostImage
// <custom-file-upload dest="'u32/'" mdl="post.postImage" attr="postImage" altText="Post Image Upload"></custom-file-upload>

// EXAMPLE templateUrl
//<div class="form-group">
//   <div class="col-sm-4">
//     <label>Category </label>
//     <select name="category" class="form-control" ng-model="categorychoice" ng-options="category.categoryname for category in $parent.categories">
//       <option value="">Select a category</option>
//     </select>
//   </div>
//   <div class="col-sm-8">
//     <label>Sub Category Name</label>
//     <div class="input-group" >
//       <input type="text" class="form-control" ng-model="singlesubcategory">
//       <span class="input-group-btn" >
//         <a class="btn btn-primary" ng-click="editSubcategory()">Edit Record</a>
//         <a class="btn btn-danger" ng-click="deleteSubcategory()">Delete Record</a>
//       </span>
//     </div>
//   </div>
// </div>





home.directive('subcategoryField', ['sendRequest', function (sendRequest) {
  return {
    restrict: 'E',
    scope:{

    },
    templateUrl:'angular/directive-templates/subcategoryField.php',
    replace: true,
    controller: ['$scope', function ($scope) {

      // //pass the value of the parent scope into the child scope so that it will display in the input field
      $scope.singlesubcategory = $scope.$parent.subcategory.subcategoryname;
      // $scope.categorychoice = $scope.$parent.subcategory.category;
      //
      $scope.editSubcategory = function () {
        NProgress.start();

        if (!$scope.singlesubcategory) {
          alert('Delete the subcategory instead');
          $scope.singlesubcategory = $scope.$parent.subcategory.subcategoryname;
        } else {
          //Send the edit Request
          $scope.details = {
            'category' : $scope.categorychoice,
            'subcategory' : $scope.singlesubcategory,
          };
          sendRequest.savePageDetails('/whatever/update-subcategory/' + $scope.$parent.subcategory.id, $scope.details);
          $scope.$parent.message = "Updated";
          $scope.$parent.messageClass = 'success';
        }
        NProgress.done();
      };

      $scope.deleteSubcategory = function () {
        sendRequest.request('/whatever/delete-subcategory/' + $scope.$parent.subcategory.id);
        var removedSubcategory = $scope.$parent.subcategories.indexOf($scope.$parent.subcategory);
        $scope.$parent.subcategories.splice(removedSubcategory, 1);
      };
    }]
  };
}]);
