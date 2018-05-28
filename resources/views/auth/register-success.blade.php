@extends('layouts.app')


@section('customCSS')
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

  div#main-controller section#intro{
    height: calc(100vh - 150px) !important;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .circular.segment{
    height: 120px;
    width: 120px;
    margin-top: 50px !important;
    margin-bottom: 90px !important;
  }

  .circular.segment h2{
    line-height: 50px;
  }

  .statistic{
    margin-bottom: 75px !important;
  }

  .massive{
    margin-bottom: 45px !important;
  }

  .ui.statistic .text.value{
    font-size: 3em !important; min-height: 1.5em !important; font-weight: normal !important;
  }

  .ui.statistic .label{
    color:#999; text-transform: none; font-size: 1.5rem !important; font-weight: normal !important;
  }

  @media (max-width:767px) {
    .circular.segment{
      height: 70px;
      width: 70px;
      margin-top: 50px !important;
      margin-bottom: 50px !important;
      padding-left: 18px !important;
    }

    .circular.segment h2{
      line-height: 20px;
    }

    .statistic{
      margin-bottom: 25px !important;
    }

    .massive{
      margin-bottom: 25px !important;
    }

    .ui.statistic  .text.value{
      font-size: 2rem !important;
    }

    .ui.statistic .label{
      font-size: 1rem !important;
    }

    .ui.header > .icon{
      font-size: 1em !important;
    }
  }


</style>

<style media="(max-width:767px)">
  #main-controller{
    background-position: center !important;
  }
  div#main-controller section#intro{
    height: calc(100vh - 80px) !important;
    background-color: rgba(255, 255, 255, 0.9);
  }
  a.massive{
    font-size: 1.2em !important;
  }
</style>

<style media="(max-height:590px)">
  div#main-controller section#intro{
    height: calc(100vh) !important;
    padding-top: 10px;
  }
</style>

<style media="(max-height:520px)">
  div#main-controller section#intro{
    height: calc(150vh) !important;
    padding-top: 10px;
  }
</style>
@endsection


@section('contents')

      <section id="intro">
        <div class="grid-container">
          <div class="grid-100 flex-center">

            <div class="ui circular blue segment">
              <h2 class="ui header huge blue dash_header">
                <i class="check icon" style="margin: 0 !important;"></i>
              </h2>
            </div>

          </div>

          <div class="grid-100 flex-center">
            <div class="ui statistic">
              <div class="text value">
                Congratulations
              </div>
              <div class="label">
                You are the owner of a brand new FastPlay24 account.
              </div>
              <br>
              <br>
              <div class="label" style="font-size: 1.2em !important;">
                Please check your email for the verification link. <br> If you did not receive any message, kindly check your spam first (then mark as “not spam”) or shoot a note to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a>
              </div>
            </div>
          </div>

          <div class="grid-100 flex-center">
            <a href="{{ route('login') }}" class="massive blue ui button" target="_self">
              Proceed
            </a>
          </div>
        </div>
      </section>


@endsection
