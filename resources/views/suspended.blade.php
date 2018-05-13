@extends('layouts.others')
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
          <div class="grid-70 push-15">

            <div id="form" class="ui segments">
              <div class="ui segment">
                <h2 class="ui center aligned icon header dash_header">
                  <i class="circular users icon"></i>
                  Account Suspended
                </h2>
                <div class="ui error message">
                    {{-- <i class="close icon"></i> --}}
                    <div class="header">
                      Dear {{ Auth::user()->firstname }}, your account has been suspended by the admin for violation of our terms and conditions. To resolve the pending issue, do the following
                    </div>
                    <br>
                    <ul class="list">
                      <li>Send the admin an email at hello@fastplay24.com</li>
                      <li>Make sure to include "Account Suspended" in the subject of your message</li>
                      <li>After that an admin will contact you with the steps required to activate your account</li>
                    </ul>
                  </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      {{-- {{ dd(session()->all()) }} --}}


      <section id="mid">
        <div class="grid-container">
          <div class="grid-30">
            {{-- <h1>Tell a friend</h1>
            <p>
              Invite your friends and family members to come join FastPlay24 and get cool earnings. Join the referral program now.
            </p> --}}
          </div>
          <div class="grid-50">
            {{-- <img class="ui medium circular image" src="/assets/4.jpg"> --}}
          </div>
        </div>
      </section>

@endsection



@section('customJS')
  <script type="text/javascript">
  $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
      ;
    });
  </script>
@endsection
