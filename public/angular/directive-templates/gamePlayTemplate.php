<section id="game-play">
  <div class="ui compact menu">
  <a class="item">
    <i class="icon clock outline"></i> <countdown-timer countdown="600"></countdown-timer>
  </a>
</div>

  <div class="ui styled fluid accordion">

    <div ng-repeat="q in user_questions">

      <div ng-class="{ 'title': true, 'active': $index == 0 }">
        <i class="dropdown icon"></i> Question {{ $index + 1}}
      </div>

      <div ng-class="{ 'content': true, 'active': $index == 0 }">
        <div class="ui stacked segment">

          <p id="question">{{ q.question.question }}</p>

          <div class="ui middle aligned selection list">

            <label class="item" for="option1{{$index}}">
              <div class="content">
                <div class="ui slider checkbox">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_1" ng-model="question.ans" ng-change="q.answered_option = q.question.option_1" id="option1{{$index}}">
                  <label>{{ q.question.option_1 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option2{{$index}}">
              <div class="content">
                <div class="ui slider checkbox">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_2" ng-model="question.ans" ng-change="q.answered_option = q.question.option_2" id="option2{{$index}}">
                  <label>{{ q.question.option_2 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option3{{$index}}">
              <div class="content">
                <div class="ui slider checkbox">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_3" ng-model="question.ans" ng-change="q.answered_option = q.question.option_3" id="option3{{$index}}">
                  <label>{{ q.question.option_3 }}</label>
                </div>
              </div>
            </label>



            <label class="item" for="option4{{$index}}">
              <div class="content">
                <div class="ui slider checkbox">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_4" ng-model="question.ans" ng-change="q.answered_option = q.question.option_4" id="option4{{$index}}">
                  <label>{{ q.question.option_4 }}</label>
                </div>
              </div>
            </label>


          </div>

        </div>
      </div>
    </div>

    <div class="text-center" style="display: flex; align-items: center; justify-content: center;">
      <button class="positive ui button" ng-click=submitExam()>Finish</button>
      <button class="ui secondary button" ng-click="pauseExam()">Pause</button>

  </div>

</section>
