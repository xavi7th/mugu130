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
            <p>Put your IQ to the test, have fun and win some cool cash on a daily basis. Win up to N15, 000 with just ₦35 every 20 minutes by answering 10 simple questions in just 10 minutes every day.</p>

            <h3>Everybody is a winner!!!</h3>

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
                  <form class="ui form" method="POST" action="/register">


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
                    </div>
                    <div class="field">
                      <div class="ui segment">
                          <div class="ui toggle checkbox">
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
