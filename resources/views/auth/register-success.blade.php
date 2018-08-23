@extends('layouts.dashboard')


@section('customCSS')
<style media="screen">
  #main-controller{
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
  #logo{
    flex-shrink: 18;
  }

  #logo .image{
    width: 25%;
  }

  #logo img{
    width: 100%;
  }

  .visible.content{
    font-size: 1.71428571rem;
    padding: 6% 13%;
    white-space:nowrap;
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


@section('customJS')
  @javascript('PAYSTACK_PUBLIC_KEY', env('PAYSTACK_PUBLIC_KEY'))
@endsection



@section('contents')

      <div ng-view class="animate translate-in"></div>

@endsection
