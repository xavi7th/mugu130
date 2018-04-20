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

  <div class="ui styled fluid accordion" ng-if="!display_results">

    <div ng-repeat="q in user_questions" ng-if="$index < 10">

      <div ng-class="{ 'title': true, 'active': $index == 0 }">
        <i class="dropdown icon"></i> Question {{ $index + 1}}
      </div>

      <div ng-class="{ 'content': true, 'active': $index == 0 }">
        <div class="ui stacked segment">
          <p id="question">{{ q.question }}</p>

          <div class="ui middle aligned selection list">
            <label class="item" for="option1{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_1">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.option_1" id="option1{{$index}}">
                  <label>{{ q.option_1 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option2{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_2">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.option_2" id="option2{{$index}}">
                  <label>{{ q.option_2 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option3{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_3">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.option_3" id="option3{{$index}}">
                  <label>{{ q.option_3 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option4{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_4">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.option_4" id="option4{{$index}}">
                  <label>{{ q.option_4 }}</label>
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


    <div class="ui segment" style="min-height:60vh; margin-top: 5vh" ng-if="loading">
      <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading questions...</div>
      </div>
    </div>
  </div>

  <div class="text-center" style="display: flex; align-items: center; justify-content: center; padding-bottom: 30px;" ng-if="!loading && !display_results">
    <button class="positive ui button" ng-click=submitExam()>Finish</button>
    <button class="ui secondary button" ng-click="pauseExam()">Pause</button>
  </div>


  <div class="grid-container" style="margin-top:70px; padding-bottom:100px;" ng-if="display_results">
    <div class="grid-100">
      <div class="ui red segment">
        <div class="ui icon message">
          <i class="newspaper icon"></i>
          <div class="content">
            <div class="header">
              Results Display
            </div>
            <p>This is the list of participants and their scores.</p>
          </div>
          <div class="ui left labeled button" tabindex="-1">
            <a class="ui basic blue label">
              {{ user_earning | currency}}
            </a>
            <div class="ui icon button">
              <i class="visa icon"></i>
              User's Earning
            </div>
          </div>
        </div>
      </div>

      <div class="ui segment" ng-if="loading">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Computing results...</div>
        </div>
        <p style="height:200px;"></p>
        <p></p>
        <p></p>
      </div>

      <div class="ui raised segment" id="resultWindow" ng-if="!loading">
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Game ID</th>
              <th>Test Duration</th>
              <th>Score</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="result in results  | orderBy: ['position', '-score'] ">
              <td>
                <div style="position:absolute; left:0;" class="ui ribbon blue label" ng-if="$index == 0">First</div>
                <div style="position:absolute; left:0;" class="ui ribbon teal label" ng-if="$index == 1">Second</div>
                <div style="position:absolute; left:0;" class="ui ribbon yellow label" ng-if="$index == 2">Third</div>

                <p style="text-align:center; position:relative;"> {{ result.session_id | limitTo : 25 }} <a class="ui red tag label" style="position:absolute; right:0;" ng-if="result.game_id == 1 ">You</a></p>

              </td>
              <td class="centered">{{ result.duration }} minutes</td>
              <td class="centered">{{ result.score }}</td>
              <td class="centered">{{ result.earning }}</td>
              <!-- <td class="centered">{{ result.game_id }}</td> -->
            </tr>
          </tbody>
          <tfoot>
            <!-- <tr>
              <th colspan="56">
                <div class="ui right floated pagination menu">
                  <a class="icon item">
                  <i class="left chevron icon"></i>
                </a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item">
                  <i class="right chevron icon"></i>
                </a>
                </div>
              </th>
            </tr> -->
          </tfoot>
        </table>
      </div>
    </div>
  </div>

</section>

`;


angular.module('demoPlay', []).directive('demoPlay', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    scope:{},
    link: (scope, element, attributes) => {

		},
    controller: ['$scope', '$timeout', ($scope, $timeout) => {

      $scope.game_timer = game_timer;
      $scope.total_examinees = _.random(10);
      $scope.display_results = false;
      $scope.loading=true;
      $scope.lifelines = $sessionStorage;
      $scope.lifelines.extra = $scope.lifelines.extra || false;
      $scope.lifelines.options = $scope.lifelines.options || false;


      var updateExaminees = setInterval(function () {
        if ($scope.total_examinees < 10000) {
          //to make the increment of the users appear ransom onstead of every fixed time
          if (_.random(50) < 5) {
            $scope.total_examinees += _.random(93);
          }
        }
      }, 500);

      $scope.requestExtra = (q) => {
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;
      };

      $scope.requestOptions = (q) => {
        var count = 0;
        if (q.option_1 != q.correct_option) {
          q.option_1 = null;
          count++;
        }
        if (q.option_2 != q.correct_option) {
          q.option_2 = null;
          count++;
        }
        if (q.option_3 != q.correct_option && count < 2) {
          q.option_3 = null;
          count++;
        }
        if (q.option_4 != q.correct_option && count < 2) {
          q.option_4 = null;
          count++;
        }

        $scope.lifelines.options = true;

      };

      $scope.submitExam = () => {
        clearInterval(updateExaminees);

        $scope.display_results = true;
        $scope.loading = true;

        sendRequest.postRequest('/submit-demo-exam', {'total_examinees':$scope.total_examinees, 'answers':$scope.user_questions} )
                 .then(function (rsp) {
                   if (rsp.status == 200) {
                     if (rsp.data.status) {
                       $scope.results = rsp.data.results;
                       $scope.user_earning = rsp.data.user_earning;
                       $scope.loading = false;

                     }
                   }
                 });

      };

      $scope.displayResults = () => {
        sendRequest.postRequest('/user/end-exam', $scope.user_questions)
                 .then(function (rsp) {
                   delete $sessionStorage.user_questions;
                   delete $sessionStorage.extra;
                   delete $sessionStorage.options;

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

      $scope.$parent.$on('$viewContentLoaded', function() {

        sendRequest.getUserQuestions('/get-deno-questions', true)
                    .then( rsp => {
                      $scope.loading=false;
                      $scope.user_questions = rsp;
                    });

         $timeout(function () {
           $('.dropdown_menu').dropdown();
           $('.ui.accordion').accordion();

         }, 500);
      });
      $scope.$on('$destroy', function() {
        // $timeout(function () {
        //   sendRequest.postRequest('/user/pause-game');
        // }, 0);
      });

    }]
  };
}]);
