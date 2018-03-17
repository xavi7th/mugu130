
// SAMPLE USAGE
// <td ng-bind-html="post.summary | trusted | truncate:200"></td>


angular.module('parseHTML', []).filter('trusted', ['$sce', function($sce) {
	return function(stringToParse)
	{
		return $sce.trustAsHtml(stringToParse);
	}
}]);

// home.filter('trusted', ['$sce', function($sce) {
//     var div = document.createElement('div');
//     return function(text) {
//         div.innerHTML = text;
//         return $sce.trustAsHtml(div.textContent);
//     };
// }]);
