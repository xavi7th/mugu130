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
  .message.al {
      font-size: 26px !important;
      padding: 5px;
      margin-top: 0 !important;
  }

  .header{
    margin-bottom: 35px !important;
  }

  .header:last-of-type{
    margin-bottom: 0 !important;
  }
</style>

<style media="(max-width:767px)">
    div#main-controller section#intro #form {
    height: auto !important;
  }

  div#main-controller section#mid{
    min-height: 105vh !important;
  }
</style>


@section('contents')

      <section id="intro">
        <div class="grid-container">
          <div class="grid-70 push-15">

            <div id="form" class="ui segments">
              <div class="ui segment">
                <h2 class="ui center aligned icon header dash_header">
                  <i class="circular times icon negative" style="font-family:sans-serif; color:#9F3A38">X</i>
                  Account Suspended
                </h2>
                <div class="ui error message">
                    {{-- <i class="close icon"></i> --}}
                    <div class="header">
                      Dear {{ Auth::user()->firstname }}, <br> <br> An anomaly has been detected on your account. Thus, we have suspended you from using this service.
                    </div>
                    <div class="header">
                       A detailed email will be sent to you within 48 hours.
                    </div>
                    <div class="header">
                       If your think this was a mistake, kindly shoot a note to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com.</a> Kindly include "Account Suspended" in the subject of your message.
                    </div>
                    <div class="header">
                       Sorry for any inconveniences caused.
                    </div>
                    <br>
                    <p class="message m0 al">
                      Cheers, <br>
      								Your buddies at FastPlay24

                    </p>
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
