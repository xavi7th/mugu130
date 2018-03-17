@extends('layouts.others')

@section('title')
  Unverified Account
@endsection

@section('contents')
<div class="container" style="padding:100px 0; border-top:1px solid #30c0f5;">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="jumbotron">
            <h1>Hello, {{ Auth::user()->firstname }}</h1>
            <p>This account has not yet been verified.</p>
            <p> Login to your email and verify your account </p>

            @if (count($errors) > 0)
              <div class="alert alert-warning alert-dismissible text-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                @foreach ($errors->all() as $error)
                  <strong></strong> {{ $error }}
                @endforeach
              </div>
            @endif

            <p class="text-center">
              <a href="{{ route('verify.request') }}" class="btn btn-lg btn-success" role="button">Resend Verification Mail</a>
            </p>



          </div>
        </div>
    </div>
</div>

@endsection
