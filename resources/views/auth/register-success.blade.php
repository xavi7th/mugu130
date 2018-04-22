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
    height: auto !important;
    background-color: rgba(255, 255, 255, 0.9);
  }

  .circular.segment{
    height: 120px;
    width: 120px;
    margin-top: 100px !important;
    margin-bottom: 120px !important;
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
              <div class="text value" style="font-size: 3em !important; min-height: 1.5em !important; font-weight: normal !important;">
                Congratulations
              </div>
              <div class="label" style="color:#999; text-transform: none; font-size: 1.5rem !important; font-weight: normal !important;">
                You are the owner of a brand new FastPlay account.
              </div>
            </div>
          </div>

          <div class="grid-100 flex-center">
            <a href="{{ route('login') }}" class="massive blue ui button" target="_self">
              Let's Continue
            </a>
          </div>
        </div>
      </section>


@endsection
