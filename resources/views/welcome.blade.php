@extends('layouts.app')

@section('customCSS')
  <style media="screen">
    div[ng-view] {
      min-height: 0 !important;
    }

    .playstore{
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .playstore a{
      display: block;
      height: 50px;
      background-image: url(http://localhost:3000/img/fastplay-playstore.jpg);
      background-repeat: no-repeat;
      background-position: center;
      width: 200px;
      transition: all 160ms ease;
    }

    .playstore a:hover{
      background-image: url(http://localhost:3000/img/fastplay-playstore-hover.jpg);
    }

    @media (max-width:1024px) {
      .playstore{
        height: 100px;
      }
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

      <section id="mid">
        <div class="grid-container">
          <div class="grid-45 grid-parent">

            <h1>welcome to fastplay24</h1>
            <p style="font-size:1.2em">Win up to N15, 000 with just ₦35 every 20 minutes by answering 10 simple questions in just 10 minutes every day.</p>

            <h3>Think - Play - Win</h3>
            <div class="flex-center mb-d-40 stack small">

              <a href="/demo-play" target="_self">
                <button class="ui right labeled basic inverted icon button">
                  Play Demo
                  <i class="gamepad icon"></i>
                </button>
              </a>
              <a href="/calculator" target="_self">
                <button class="ui right labeled basic inverted icon button">
                  View Calculator
                  <i class="calculator icon"></i>
                </button>
              </a>
              <a href="{{ route('faq') }}" target="_self">
                <button class="ui right labeled basic inverted icon button">
                  How it works
                  <i class="lightbulb icon"></i>
                </button>
              </a>
            </div>

            <div class="grid-100" style="position: relative; margin-top: 20px;">

              <table class="ui blue celled table" style="font-size: 1.2em;">

                <tbody class="ng-cloak" id="ng-cloak">
                  <tr>
                    <th colspan="2" style="font-size:1.3em; vertical-align:middle; height:60px; text-align:center;">USERS' ACTIVITY SUMMARY</th>
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
          <div class="grid-40 push-10">
            <div id="form" class="ui segments">
              <div class="ui segment">
                <div id="session-menu" class="ui two item menu">
                  <a class="{{ Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral' ? 'active' : null }} item" data-tab="register" ng-click="height = 130">Register</a>
                  <a class="{{ Route::currentRouteName() == 'login' ? 'active' : null || Route::currentRouteName() == 'home' ? 'active' : null }} item" data-tab="login" ng-click="height = 85">Login</a>
                </div>
              </div>

              <div class="ui segment" style="padding: 0px 1em;">
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

                <div class="ui tab {{ (Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral') && Agent::isDesktop() ? 'active' : null }}" data-tab="register" style="padding-bottom: 15px;">
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
                          <label>I agree to the<a href="{{ route('terms') }}" target="_blank"> terms and conditions</a></label>
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

                <div class="ui tab {{ (Route::currentRouteName() == 'login' ? 'active' : null || Route::currentRouteName() == 'home') && Agent::isDesktop() ? 'active' : null }}" data-tab="login">
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

        <div class="grid-container mb-t-100">

          <div class="grid-45" style="font-size: 1.2em;">
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
                      <span class="testimonials_comments" ng-if="e.user.id == 1145">I will definitely recommend FastPlay24. It pays wella and their customer service is awesome</span>
                      <span class="testimonials_comments" ng-if="e.user.id == 287000">I  definitely recommend FastPlay24. It pays wella and their customer service is awesome</span>
                      <span class="testimonials_comments" ng-if="e.user.id == 505">FastPlay24 is a really great platform. The questions are quite simple and it pays for real. Just answer 10 simple questions in time. That's all. Great job guys.</span>
                    </div>
                    <div class="description" style="font-size: 1.2em;">
                      <br><br>
                      <span ng-if="e.user.id == 1145"><a href="https://instagram.com/darerah_gram"><i class="fa fa-instagram testimonials_ref_links"></i></a></span>
                      <span ng-if="e.user.id == 287000"></span>
                      <span ng-if="e.user.id == 505">
                          <a target="_blank" href="https://instagram.com/kaligraph_jay"><i class="fa fa-instagram testimonials_ref_links"></i></a>
                          <a target="_blank" href="https://facebook.com/profile.php?id=100008795411460 "><i class="fa fa-facebook testimonials_ref_links"></i></a>
                          <a target="_blank" href="https://twitter.com/kaligragh_jay "><i class="fa fa-twitter testimonials_ref_links"></i></a>
                      </span>
                    </div>
                  </div>
                  <div class="extra content">
                    <a>
                      <i class="bullhorn icon"></i>
                      <b>EARNINGS:</b> @{{ e.user_earnings | currency }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-25 playstore">
            <a href="https://play.google.com/store/apps/details?id=tcom.fastplay24" target="_blank"></a>
          </div>
          <div class="grid-30 info">
            <h1>Tell a friend</h1>
            <p>
              <img src="/img/fastplay24_referal_homepage.png" alt="">
            </p>
            <p>
              Invite your friends and family members to come join FastPlay24 and get cool earnings. Join the referral program now.
            </p>
          </div>
        </div>
      </section>

      <div ng-view></div>


@endsection
