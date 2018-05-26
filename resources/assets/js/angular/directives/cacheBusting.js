'use strict';
angular.module('cacheBusting', [])
  .factory('cacheBusting', ['$injector', function($injector) {
return {
      'request': function(config) {

        console.log(config.url);
        console.log(version_number);
        if (config.url.indexOf('views') !== -1 || config.url.indexOf('img') !== -1) {
          config.url = config.url + '?id=' + window.version_number; // this variable is passed here from env file using @javascript
        }
        return config;
      }
    };
  }])
.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('cacheBusting');
  }]);
