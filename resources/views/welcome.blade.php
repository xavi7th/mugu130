@extends('layouts.app')
{{--
@section('content')
  @auth
    @javascript('loggedin', true)
  @endauth

  <div ng-view></div>

@endsection --}}
<style media="screen">
  #main-controller{
    min-height: 100vh;
      position: relative;
      background-color: #135482;
      background-image: url(/img/4.jpg);
      background-blend-mode: exclusion;
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>


@section('contents')

      <section id="intro">
        <div class="grid-container">
          <div class="grid-40">

            <h1>welcome to fastplay24</h1>
            <p>Put your IQ to the test, have fun and win some cool cash on a daily basis. Win up to N15, 000 every 20 minutes by answering 10 simple questions in just 10 minutes every day.</p>

            <h3>Everybody is a winner!!!</h3>

            <a href="/demo-play" target="_blank">
              <button class="ui labeled red icon button">
                <i class="gamepad icon"></i>
                Demo Game
              </button>
            </a>

          </div>
          <div class="grid-40 push-10">
            <div id="form" class="ui segments">
              <div class="ui segment">
                <div id="session-menu" class="ui two item menu">
                  <a class="{{ Route::currentRouteName() == 'register' || Route::currentRouteName() == 'referral' ? 'active' : null }} item" data-tab="register">Register</a>
                  <a class="{{ Route::currentRouteName() == 'login' ? 'active' : null || Route::currentRouteName() == 'home' ? 'active' : null }} item" data-tab="login">Login</a>
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
                      <input type="password" name="password" placeholder="Enter Password" required value="{{ old('password') }}">
                    </div>
                    <div class="field">
                      <input type="password" name="password_confirmation" placeholder="Confirm Password" required value="{{ old('password_confirmation') }}">
                    </div>
                    <div class="field">
                      <div class="ui segment">
                          <div class="ui toggle checkbox">
                          <input type="checkbox" name="terms">
                          <label>Agree to terms and conditions</label>
                        </div>
                      </div>
                    </div>

                    <hr>
                    <h3>Referrer Details</h3>
                    <div class="field">
                      <input type="text" name="referrer.email" placeholder="No referral supplied" ng-readonly="true" value="{{ $refdetails['email'] ?? null }}">
                      <input type="hidden" name="referrer.id" placeholder="No referral supplied" ng-readonly="true" value="{{ $refdetails['id'] ?? null }}">
                    </div>

                    <button type="submit" style="background-color: #135482;" class="ui fluid orange button action">REGISTER</button>
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
                    <button type="submit" style="background-color: #135482;" class="ui fluid orange button action">LOGIN</button>
                  </form>
                  <div id="forgot-pass" class="extra content">
                    <a href="#">forgot your password?</a>
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
              Invite your friends and family members to come join FastPlay24 and get cool earnings. Join the referral program now.
            </p>
          </div>
        </div>
      </section>

@endsection

@section('customJS')
  <script>
    $('.action').click(function () {
      $(this).addClass('loading');
      // $(this).attr({'disabled': 'disabled'});
      return true;
    });
  </script>
@endsection
