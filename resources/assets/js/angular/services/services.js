
  angular.module('sendRequest', []).factory('sendRequest', ['$http', '$q', function ($http, $q) {

    var data = {};
    return {

        storeData : function(key, value) {
            data[key] = value;
        },

        getData : function(key){
            return data[key];
        },

        getUserDetails : function (url) {
          var deferred = $q.defer();

          if (!this.getData('userdetails')) {
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

        getGameState : function (url) {

            return this.postRequest(url)
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
