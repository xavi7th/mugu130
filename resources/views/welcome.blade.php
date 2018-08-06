@extends('layouts.app')

@section('customCSS')
  <style media="screen">
    div[ng-view] {
      min-height: 0 !important;
    }

  </style>
@endsection


@section('title')
  Welcome
@endsection


@section('customJS')
  <script>

      $('.action').click(function () {
        if ($('#terms:checked').length) {
          $(this).addClass('loading');
        }
      });
  </script>
@endsection

@section('contents')

      <section id="intro">
        <div class="grid-container">
          <div class="grid-40">

            <h1>welcome to fastplay24</h1>
            <p style="font-size:1.2em">Put your IQ to the test, have fun and win some cool cash on a daily basis. <br><br>Win up to N15, 000 with just ₦35 every 20 minutes by answering 10 simple questions in just 10 minutes every day.</p>

            <h3>Think - Play - Win</h3>

            <a href="/demo-play" target="_self">
              <button class="ui labeled blue icon button">
                <i class="gamepad icon"></i>
                Play Demo
              </button>
            </a>
            <a href="/calculator" target="_self">
              <button class="ui right labeled purple icon button">
                View Calculator
                <i class="calculator icon"></i>
              </button>
            </a>


          </div>
          <div class="grid-40 push-10">
            <div id="form" class="ui segments">
              <div class="ui segment">
                <div id="session-menu" class="ui two item menu">
                  <a class="{{ Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral' ? 'active' : null }} item" data-tab="register" ng-click="height = 130">Register</a>
                  <a class="{{ Route::currentRouteName() == 'login' ? 'active' : null || Route::currentRouteName() == 'home' ? 'active' : null }} item" data-tab="login" ng-click="height = 85">Login</a>
                </div>
              </div>

              <div class="ui segment" style="padding-bottom: 30px;">
                @if (count($errors) > 0)
                  <div class="ui error message">
                    <div class="header">
                      There were some errors with your submission
                    </div>
                    <ul class="list">
                      @foreach ($errors->all() as $error)
                          <li>{{ $error }}</li>
                      @endforeach
                    </ul>
                  </div>
                @endif

                <div class="ui tab {{ Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral' ? 'active' : null }}" data-tab="register">
                  <form class="ui form" method="POST" action="/register" name="registerForm">

                    {{ csrf_field() }}
                    <h2>REGISTER</h2>
                    <div class="field">
                      <div class="two fields">
                        <div class="field">
                          <input type="text" name="firstname" placeholder="Enter Firstname" value="{{ old('firstname') }}">
                        </div>
                        <div class="field">
                          <input type="text" name="lastname" placeholder="Enter Lastname" value="{{ old('lastname') }}">
                        </div>
                      </div>
                    </div>
                    <div class="field">
                      <input type="email" name="email" placeholder="Enter Email" required value="{{ old('email') }}">
                    </div>
                    <div class="field">
                      <input type="password" name="password" placeholder="Enter Password" required value="{{ old('password') }}" ng-model="password">
                    </div>
                    <div class="field">
                      <input type="password" name="password_confirmation" placeholder="Confirm Password" required value="{{ old('password_confirmation') }}" ng-model="password_confirmation">
                      <div class="ui negative message" ng-show="password != password_confirmation">
                        <p>Password confirmation does not match password</p>
                      </div>
                    </div>
                    <div class="field">
                      <div class="ui segment">
                          <div class="ui checkbox">
                          <input id="terms" type="checkbox" name="terms" ng-model="terms" required>
                          <label>Agree to<a href="{{ route('terms') }}" target="_blank"> terms and conditions</a></label>
                        </div>
                      </div>
                    </div>

                    <hr>
                    <h3>Referrer Details</h3>
                    <div class="field">
                      <input type="text" name="referrer.email" placeholder="No referral supplied" ng-readonly="true" value="{{ $refdetails['email'] ?? null }}">
                      <input type="hidden" name="referrer.id" placeholder="No referral supplied" ng-readonly="true" value="{{ $refdetails['id'] ?? null }}">
                    </div>

                    <button type="submit" class="ui fluid blue button action" ng-class="[{'loading' : loading}]" ng-click="loading = true" ng-disabled="!terms || password_confirmation != password">REGISTER</button>
                  </form>
                </div>

                <div class="ui tab {{ Route::currentRouteName() == 'login' ? 'active' : null || Route::currentRouteName() == 'home' ? 'active' : null }}" data-tab="login">
                  <form class="ui form" method="POST" action="/login">
                    {{ csrf_field() }}
                    <h2>LOGIN</h2>
                    <div class="field">
                      <input type="email" name="email" placeholder="Enter Email" required>
                    </div>
                    <div class="field">
                      <input type="password" name="password" placeholder="Enter Password" required>
                    </div>
                    <button type="submit" class="ui fluid blue button action" ng-class="[{'loading' : loading}]" ng-click="loading = true">LOGIN</button>
                  </form>
                  <div id="forgot-pass" class="extra content">
                    <a href="{{ route('password.request') }}" target="_self">forgot your password?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mid">
        <div class="grid-container">

          <div class="grid-30 info ">
            <h1>Tell a friend</h1>
            <p>
              <img src="/img/fastplay24_referal_homepage.png" alt="">
            </p>
            <p>
              Invite your friends and family members to come join FastPlay24 and get cool earnings. Join the referral program now.
            </p>
          </div>
          <div class="grid-45  push-20  hide-on-mobile hide-on-tablet" style="position: relative; bottom: -100px;">

            <table class="ui blue celled table" style="font-size: 1.2em;">

              <tbody ng-cloak>
                <tr >
                  <th colspan="2" style="font-size:2em; vertical-align:middle; height:60px; text-align:center;">USERS' ACTIVITY SUMMARY</th>
                </tr>
                <tr>
                  <td>Total Quizzes Taken</td>
                  <td>@{{ total_games_played }}</td>
                </tr>
                <tr>
                  <td>Number of Users</td>
                  <td>@{{ total_num_of_users }}</td>
                </tr>
                <tr>
                  <td>Total User Earnings</td>
                  <td>@{{  total_user_earnings | currency }}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="intro">
        <div class="grid-container">
          <div class="grid-45  push-20 hide-on-desktop" style="margin-bottom: 45px;">

            <table class="ui blue celled table" style="font-size: 1.2em;">

              <tbody ng-cloak>
                <tr >
                  <th colspan="2" style="font-size:1.2em; vertical-align:middle; height:60px; text-align:center;">USERS' ACTIVITY SUMMARY</th>
                </tr>
                <tr>
                  <td>Total Quizzes Taken</td>
                  <td>@{{ total_games_played }}</td>
                </tr>
                <tr>
                  <td>Number of Users</td>
                  <td>@{{ total_num_of_users }}</td>
                </tr>
                <tr>
                  <td>Total User Earnings</td>
                  <td>@{{  total_user_earnings | currency }}</td>
                </tr>

              </tbody>
            </table>
          </div>
          <div class="grid-50 push-25">
            <h1 class="text center">TOP WINNERS</h1>
            <div class="owl-carousel owl-theme">
              <div ng-repeat=" e in ::top_three_earners">
                <div class="ui card green">
                  <div class="image">
                    {{-- <img src="../images/avatar2/large/kristy.png"> --}}
                  </div>
                  <div class="content">
                    <a class="header">@{{ e.user.firstname }} @{{ e.user.lastname }}</a>
                    <div class="meta">
                      <span class="date">Joined @{{ e.user.created_at | timeAgo }}</span>
                    </div>
                    <div class="description">
                      <span ng-if="$index == 0">I will definitely recommend FastPlay24. It pays wella and their customer service is awesome</span>
                      <span ng-if="$index == 1">I  definitely recommend FastPlay24. It pays wella and their customer service is awesome</span>
                      <span ng-if="$index == 2">FastPlay24 is a really great platform. The questions are quite simple and it pays for real. Just answer 10 simple questions in time. That's all. Great job guys.</span>
                    </div>
                  </div>
                  <div class="extra content">
                    <a>
                      <i class="user icon"></i>
                      @{{ e.user_earnings | currency }} earned from @{{ e.games_count }} games played
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div ng-view></div>



      <style media="screen and ( max-width:767px)">

        @if (Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral' )
          section#mid{
            position: relative !important;
            height: 125vh !important;
            height: @{{height}}vh !important;
          }

        @else

          section#mid{
            position: relative !important;
            height: 85vh !important;
            height: @{{height}}vh !important;
          }

        @endif


      </style>


@endsection
