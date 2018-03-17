
angular.module('userProfile', []).directive('userProfile', [function () {
  return {
    restrict: 'E',
    scope:{
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    templateUrl:'angular/directive-templates/userProfileTemplate.php',
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
    controller: ['$scope', function ($scope) {

      $scope.state = 'loading';

      // $scope.uploadImage = function ($event, files) {
      //   sendRequest.processImageUpload('/api/upload-image', $scope.mdl , $scope.dest, $localStorage.userToken)
      //   .then(function (data) {
      //     console.log(data);
      //     if (undefined == data.filename) {
      //       console.error('Server Route Error');
      //     }
      //     else{
      //       $scope.mdl = data.filename;
      //       $scope.$parent.filename = data.filename;
      //       // Notification.success({ message: 'Upload Successful', positionX: 'center'});
      //
      //     }
      //   });
      // };
      //
    }]
  };
}]);
