
  angular.module('sendRequest', []).factory('sendRequest', ['$http', '$q', function ($http, $q) {

    var data = {};
    return {

        storeData : function(key, value) {
            data[key] = value;
        },

        getData : function(key){
            return data[key];
        },

        getUserDetails : function (url, flushStore = false) {
          var deferred = $q.defer();

          if (flushStore || !this.getData('userdetails')) {
            var _this = this;
            return this.postRequest(url)
                .then(function (rsp) {
                  _this.storeData('userdetails', rsp.data);
                   return _this.getData('userdetails');
                });
          }
          deferred.resolve(this.getData('userdetails'));
          return deferred.promise;
        },

        getTotalEarnings : function (url, flushStore = false) {
          var deferred = $q.defer();

          if (flushStore || !this.getData('total_earnings')) {
            var _this = this;
            return this.postRequest(url)
                .then(function (rsp) {
                  _this.storeData('total_earnings', rsp.data);
                   return _this.getData('total_earnings');
                });
          }
          deferred.resolve(this.getData('total_earnings'));
          return deferred.promise;
        },

        getBanks : function (url) {
          var deferred = $q.defer();

          if (!this.getData('banks_list')) {
            var _this = this;
            return this.postRequest(url)
                .then(function (rsp) {
                  _this.storeData('banks_list', rsp.data);
                   return _this.getData('banks_list');
                });
          }
          deferred.resolve(this.getData('banks_list'));
          return deferred.promise;
        },

        getGameState : function () {

            return this.postRequest('/user/get-game-state')
                .then(function (rsp) {
                   return rsp.data;
                });
        },

        getUserQuestions : function (url) {
          var deferred = $q.defer();

          if (!this.getData('user_questions')) {
            var _this = this;
            return this.postRequest(url)
                .then(function (rsp) {
                  _this.storeData('user_questions', rsp.data);
                   return _this.getData('user_questions');
                });
          }
          deferred.resolve(this.getData('user_questions'));
          return deferred.promise;
        },

        getCountriesStates : function () {
          var deferred = $q.defer();

          if (!this.getData('countries_states')) {
            var _this = this;
            return this.postRequest('/api/get-countries-state')
                .then(function (rsp) {
                  _this.storeData('countries_states', rsp.data);
                   return _this.getData('countries_states');
                });
          }
          deferred.resolve(this.getData('countries_states'));
          return deferred.promise;
        },

        processImageUpload : function (url, data, foldername) {
          //Handle image changes
            NProgress.start();

            // send the image to the server as base64 data
            return $http .post(url, {image: data, fn: foldername})
                  .then(function (response) {
                    NProgress.done();
                    return response.data;

                  },
                  function (err) {
                    console.log(err.statusText);
                  });

        },
        postRequest : function (url, data) {

          return $http .post(url, {details: data})
                        .then(function (response) {

                          $('html, body').animate({
                            scrollTop: 0
                          }, 700);
                          return response;
                        },
                        function (err) {
                          $('html, body').animate({
                            scrollTop: 0
                          }, 700);
                          console.log(err);
                          return err;
                        });
        },
        request : function (url) {
          var data = [];
          return $http.get(url)
                      .then(function (response) {
                        return response.data;
                      },
                      function (err) {
                        console.log(err.statusText);
                      });
        }
    };

  }]);

  angular.module('bootstrapPage', []).factory('bootstrapPage', ['$timeout', '$location', 'Notification', 'sendRequest', ($timeout, $location, Notification, sendRequest) => {
     	return {
        dashboard:  (scope) => {
          sendRequest.getUserDetails('/api/get-user-details')
          .then( (rsp) => {
            scope.userdetails = rsp.userdetails;
          });
          sendRequest.getTotalEarnings('/user/get-total-earnings')
                    .then(function (rsp) {
                      scope.total_earnings = rsp.total_earnings;
                    });
          // sendRequest.postRequest('/api/get-dashboard-page-details')
          //           .then(function (rsp) {
          //             if (rsp.status == 200) {
          //               $scope.packages = rsp.data.packages;
          //               $scope.total_investments = _.sumBy(rsp.data.packages, function(o) { return o.thisghamt; });
          //               $scope.total_returns = _.sumBy(rsp.data.packages, function(o) { return o.expectedghamt; });
          //               $scope.payments_received = _.sumBy(rsp.data.payments_received, function(o) { return o.expectedghamt; });
          //               $scope.notification = rsp.data.notification;
          //               NProgress.done();
          //             }
          //           });
          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
            }, 500);
          });

        },
        profile:  (scope) => {
          sendRequest.getUserDetails('/api/get-user-details')
                   .then(function (rsp) {
                     scope.userdetails = rsp.userdetails;
                   });
          sendRequest.postRequest('/user/get-profile-page-details')
                   .then( (rsp) => {
                     if (rsp.status == 200) {
                         scope.user_transactions = rsp.data.page_details.transactions;
                         scope.user_earnings = rsp.data.page_details.earnings;
                         scope.user_games = rsp.data.page_details.games;
                     }
                   });
          sendRequest.getTotalEarnings('/user/get-total-earnings')
                   .then(function (rsp) {
                     scope.total_earnings = rsp.total_earnings;
                   });
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('#profile-menu .item').tab();
               $('.dropdown_menu').dropdown();
             }, 500);
          });

        },
        settings:  (scope)  => {
          sendRequest.getUserDetails('/api/get-user-details')
                   .then(function (rsp) {
                     scope.userdetails = rsp.userdetails;
                   });
          sendRequest.getBanks('/api/get-banks-list')
                   .then(function (rsp) {
                     scope.banks = rsp.banks;
                   });
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('#edit .item').tab();
               $('.dropdown_menu').dropdown();
             }, 500);
           });
        },
        gameplay:  (scope)  => {
          sendRequest.getUserDetails('/api/get-user-details', true)
          .then( (rsp) => {
            scope.userdetails = rsp.userdetails;
          });
          sendRequest.getTotalEarnings('/user/get-total-earnings')
                    .then(function (rsp) {
                      scope.total_earnings = rsp.total_earnings;
                    });
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
               $('.ui.accordion').accordion();
             }, 500);
          });
        },

        results:  (scope)  => {
          sendRequest.getUserDetails('/api/get-user-details')
                    .then(function (rsp) {
                      scope.userdetails = rsp.userdetails;
                    });
          sendRequest.postRequest('/user/get-exam-results')
                    .then( (rsp) => {
                      if (rsp.status == 200) {
                        if (rsp.data.results == false) {
                          $location.path('/dashboard');
                          Notification.error({message: 'Error fetching results.', positionX:'center'});
                        }
                        if (rsp.data != 'invalid') {
                          scope.results = rsp.data.results;
                          scope.total_examinees = rsp.data.total_examinees;
                          scope.total_share = rsp.data.total_share;
                        } else {
                          $location.path('/dashboard');
                          Notification.error({message: 'Insufficient users for game session. Units reversed', positionX:'center'});
                        }
                      }
                    });
          sendRequest.getTotalEarnings('/user/get-total-earnings')
                    .then(function (rsp) {
                      scope.total_earnings = rsp.total_earnings;
                    });



          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
               $('.ui.accordion').accordion();
             }, 500);
          });
        },
     	};
     }]);
