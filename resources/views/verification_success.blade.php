@extends('layouts.others')

@section('title')
  Unverified Account
@endsection

@section('contents')

  <section class="trans-complete">

  </section>
<div class="container" style="padding:100px 0; border-top:1px solid #30c0f5;">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="jumbotron">
            <h1>Hello, {{ $user->firstname }}</h1>
            <div class="row">
                <div class="col-sm-8 col-sm-offset-2" style="margin-top:3em;">
                    <div class="trans-card" style="text-align:center; text-transform:uppercase;">
                       <img src="{{ asset('img/tick-512.png') }}" alt=""class="img-responsive" style="max-height:200px; margin:0 auto; width:auto;">
                        <h1 style="color:#555; font-size:36px; margin: 25px 0;">Account Verified.</h1>
                    </div>
                </div>
            </div>

            <p class="text-center">
              <a href="{{ route('login') }}" class="btn btn-lg btn-success" role="button">Login to account</a>
            </p>



          </div>
        </div>
    </div>
</div>

@endsection
