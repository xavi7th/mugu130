@extends('layouts.others')

@section('title')
  Reset Password
@endsection

@section('contents')
  <section id="intro"  style="height: auto; padding: 10px 0;">
    <div class="grid-container">

      <div class="grid-40 push-30">
        <div id="form" class="ui segments"  style="height: auto; margin-top: 25%;">
          <div class="ui segment">
            <div id="session-menu" class="ui one item menu">
              <a class="active item" data-tab="register"  style="color:white; cursor: default; text-transform: uppercase;">Reset Password</a>
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

            @if (session('status'))
              <div class="ui success message">
                <div class="header">
                  {{ session('status') }}
                </div>
              </div>
            @endif

            <div class="ui tab active" data-tab="register">
              <form class="ui form" method="POST" action="{{ route('password.request') }}">

                <div class="ui segments">
                  <div class="ui blue segment">
                    {{ csrf_field() }}
                    <input type="hidden" name="token" value="{{ $token }}">
                    <div class="field">
                      <input id="email" type="email" name="email" value="{{ $email or old('email') }}" placeholder="Enter Email" required autofocus>
                    </div>
                    <div class="field">
                      <input id="password" type="password" name="password" placeholder="Enter Password" required>
                    </div>
                    <div class="field">
                      <input id="password-confirm" type="password" name="password_confirmation" placeholder="Confirm Password" required>
                    </div>
                  </div>
                  <div class="ui segment flex-center">
                    <div class="ui buttons">
                      <button type="submit" class="ui flud blue button action">Reset Password</button>
                      <div class="or"></div>
                      <a href="{{ route('home') }}" class="ui flud positive button action">Back to Home Page</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="mid" style="  min-height: calc(100vh - 240px);">
    <div class="grid-container">
      <div class="grid-30 info">

      </div>
    </div>
  </section>
  <div ng-view></div>






<div class="container" style="padding:100px 0; border-top:1px solid #30c0f5;">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading"></div>

                <div class="panel-body">
                    <form class="form-horizontal" method="POST" action="">
                        {{ csrf_field() }}



                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">

                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">

                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                            <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>
                            <div class="col-md-6">

                                @if ($errors->has('password_confirmation'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password_confirmation') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <button type="submit" class="btn btn-primary">

                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
