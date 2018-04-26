// EXAMPLE
// <game-play></game-play>


var url = `
<section id="game-play">
  <div class="ui compact menu">
    <a class="item">
      <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="displayResults()"></countdown-timer>
    </a>
  </div>
  <div class="ui violet label" style="font-size: 13px;">
    <span style="padding-right: 10px;">Active Gamers</span>
    <i class="users icon"></i> {{ total_examinees }}
  </div>

  <div class="ui styled fluid accordion">

    <div ng-repeat="q in user_questions" ng-if="$index < 10">

      <div ng-class="{ 'title': true, 'active': $index == 0 }">
        <i class="dropdown icon"></i> Question {{ $index + 1}}
      </div>

      <div ng-class="{ 'content': true, 'active': $index == 0 }">
        <div class="ui stacked segment">

          <p id="question">{{ q.question.question }}</p>

          <div class="ui middle aligned selection list">

            <label class="item" for="option1{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.question.option_1">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_1" id="option1{{$index}}">
                  <label>{{ q.question.option_1 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option2{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.question.option_2">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_2" id="option2{{$index}}">
                  <label>{{ q.question.option_2 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option3{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.question.option_3">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_3" id="option3{{$index}}">
                  <label>{{ q.question.option_3 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option4{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.question.option_4">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_4" id="option4{{$index}}">
                  <label>{{ q.question.option_4 }}</label>
                </div>
              </div>
            </label>

            <div class="ui buttons">
              <button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>
              <div class="or"></div>
              <button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>
            </div>


          </div>

        </div>
      </div>
    </div>

    <div class="text-center" style="display: flex; align-items: center; justify-content: center;">
      <button class="positive ui button" ng-click=submitExam()>Finish</button>
  </div>

</section>

`;


angular.module('gamePlay', []).directive('gamePlay', ['$location', '$localStorage', 'Notification', 'sendRequest', function ($location, $localStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {
      $scope.lifelines = $localStorage;
      $scope.lifelines.extra = $scope.lifelines.extra || false;
      $scope.lifelines.options = $scope.lifelines.options || false;

      sendRequest.getUserQuestions('/user/get-user-questions')
                  .then( rsp => {
                    $scope.user_questions = rsp;
                  });

      $scope.submitExam = () => {

        sendRequest.postRequest('/user/submit-exam', $scope.user_questions)
                 .then(function (rsp) {
                   delete $localStorage.user_questions;
                   delete $localStorage.extra;
                   delete $localStorage.options;

                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                     $location.path('/dashboard');
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       sendRequest.storeData('user_score', rsp.data.user_score);
                       $localStorage.user_score = rsp.data.user_score;
                       $location.path('/dashboard');
                     }
                   }
                 });

      };

      $scope.requestExtra = (q) => {
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;
      };

      $scope.requestOptions = (q) => {
        var count = 0;
        if (q.question.option_1 != q.question.correct_option) {
          q.question.option_1 = null;
          count++;
        }
        if (q.question.option_2 != q.question.correct_option) {
          q.question.option_2 = null;
          count++;
        }
        if (q.question.option_3 != q.question.correct_option && count < 2) {
          q.question.option_3 = null;
          count++;
        }
        if (q.question.option_4 != q.question.correct_option && count < 2) {
          q.question.option_4 = null;
          count++;
        }

        $scope.lifelines.options = true;

      };

      $scope.displayResults = () => {
        sendRequest.postRequest('/user/end-exam', $scope.user_questions)
                 .then(function (rsp) {
                   delete $localStorage.user_questions;
                   delete $localStorage.extra;
                   delete $localStorage.options;

                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                     $location.path('/dashboard');
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       sendRequest.storeData('user_score', rsp.data.user_score);
                       $localStorage.user_score = rsp.data.user_score;
                       $location.path('/dashboard/display-results');
                     }
                   }
                 });
      };

    }]
  };
}]);
