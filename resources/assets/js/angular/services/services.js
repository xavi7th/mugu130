 angular.module('sendRequest', []).factory('sendRequest', ['$http', '$q', '$sessionStorage', function ($http, $q, $sessionStorage) {

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

        getUserQuestions : function (url, flushStore = false) {
          var deferred = $q.defer();

          if (flushStore) {
            delete $sessionStorage.user_questions;
            delete $sessionStorage.extra;
            delete $sessionStorage.options;
          }

          if (!$sessionStorage.user_questions) {
            var _this = this;
            return this.postRequest(url)
                .then(function (rsp) {
                  $sessionStorage.user_questions = rsp.data.user_questions;
                  return $sessionStorage.user_questions;
                });
          }
          deferred.resolve($sessionStorage.user_questions);
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
                          return response;
                        },
                        function (err) {
                          if (err.status == 419 || err.status == 401) {
                            location.href = '/login';
                          }
                          else if (err.status == 403) {
                            location.href = '/suspended';
                          }
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

          sendRequest.postRequest('/user/get-dashboard-page-details');
          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();

              Echo.channel(`exam_member_count`)
              .listen('ExamJoined', (e) => {
                scope.total_examinees = e.total_examinees;
              });

            }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
              Echo.leave('exam_member_count');
            }, 0);
          });

        },
        profile:  (scope) => {
          sendRequest.postRequest('/user/get-profile-page-details')
                   .then( (rsp) => {
                     if (rsp.status == 200) {
                         scope.user_transactions = rsp.data.page_details.transactions;
                         scope.user_earnings = rsp.data.page_details.earnings;
                         scope.user_games = rsp.data.page_details.games;
                         scope.referrals = rsp.data.page_details.referrals;
                     }
                   });
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('#profile-menu .item').tab();
               $('.dropdown_menu').dropdown();
             }, 500);
          });

        },
        settings:  (scope)  => {
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
          sendRequest.getUserDetails('/user/get-user-details', true)
          .then( (rsp) => {
            scope.userdetails = rsp.userdetails;
          });
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
               $('.ui.accordion').accordion();

               Echo.channel(`exam_member_count`)
               .listen('ExamJoined', (e) => {
                 scope.total_examinees = e.total_examinees;
               });
             }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
              sendRequest.postRequest('/user/pause-game');
              Echo.leave('exam_member_count');
            }, 0);
          });
        },
        results:  (scope)  => {
          sendRequest.postRequest('/user/get-exam-results')
                    .then( (rsp) => {
                      if (rsp.status == 200) {
                        if (rsp.data.results == false) {
                          $location.path('/dashboard');
                          Notification.error({message: 'Error fetching results.', positionX:'center'});
                        }
                        if (rsp.data != 'invalid') {
                          scope.results = rsp.data.results;
                          scope.user_earning = rsp.data.user_earning;
                        }
                        else {
                          $location.path('/dashboard');
                          Notification.error({message: 'Insufficient users for game session. Units reversed', positionX:'center'});
                        }
                      }
                    });



          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
             }, 500);
          });
        },
        messages:  (scope)  => {



          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
               $('.special.cards .image').dimmer({
                  on: 'hover'
                });
             }, 500);
          });
        },
        notices:  (scope)  => {
          scope.$on('$viewContentLoaded', function() {
             $timeout(function () {
               $('.dropdown_menu').dropdown();
             }, 500);
          });
        },
     	};
     }]);

  angular.module('bootstrapAdminPage', []).factory('bootstrapAdminPage', ['$timeout', '$location', 'Notification', 'sendRequest', ($timeout, $location, Notification, sendRequest) => {
     	return {
        dashboard:  (scope) => {

          sendRequest.postRequest(route_root + '/api/get-dashboard-page-details')
                    .then(function (rsp) {
                      if (rsp.status == 200) {
                      }
                    });
          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
              $('.shape').shape();
              NProgress.done();
            }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
            }, 0);
          });

        },

        questions:  (scope) => {

          sendRequest.postRequest(route_root + '/api/get-questions-page-details')
                    .then(function (rsp) {
                      if (rsp.status == 200) {
                        scope.questions = rsp.data.questions;
                      }
                    },
                  err => {
                    Notification.error('Error retrieving questions from server');
                  });

          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
              $('.shape').shape();
              NProgress.done();
            }, 500);
          });
          // scope.$on('$destroy', function() {
          //   $timeout(function () {
          //   }, 0);
          // });

        },

        admins:  (scope) => {

          sendRequest.postRequest(route_root + '/api/get-admins-page-details')
                    .then(function (rsp) {
                      if (rsp.status == 200) {
                        scope.admins = rsp.data.admins;
                        NProgress.done();
                      }
                    },
                  err => {
                    Notification.error('Error retrieving admins from server');
                  });



          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
            }, 500);

          });
          scope.$on('$destroy', function() {
            $timeout(function () {
            }, 0);
          });

        },

        users:  (scope) => {

          sendRequest.postRequest(route_root + '/api/get-users-page-details')
                    .then(function (rsp) {
                      if (rsp.status == 200) {
                        scope.users = rsp.data.users;
                        NProgress.done();
                      }
                    },
                  err => {
                    Notification.error('Error retrieving users from server');
                  });

          sendRequest.getBanks('/api/get-banks-list')
                   .then(function (rsp) {
                     scope.banks = rsp.banks;
                   });

          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
            }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
            }, 0);
          });

        },

        games:  (scope) => {

          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
              $('.ui.sticky')
              .sticky({
                context: '#content-context'
              });
              NProgress.done();
            }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
            }, 0);
          });

        },

        transactions:  (scope) => {

          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
              $('.ui.sticky')
              .sticky({
                context: '#content-context'
              });
            }, 500);
          });
          scope.$on('$destroy', function() {
            // $timeout(function () {
            // }, 0);
          });

        },

        messages:  (scope) => {

          scope.$on('$viewContentLoaded', function() {
            $timeout(function () {
              $('.dropdown_menu').dropdown();
            }, 500);
          });
          scope.$on('$destroy', function() {
            $timeout(function () {
            }, 0);
          });

        },

        settings:  (scope)  => {
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
     	};
     }]);
