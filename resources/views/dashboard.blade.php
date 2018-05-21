@extends('layouts.dashboard')

@section('title')
  Dashboard
@endsection

@section('customJS')
  @javascript('PAYSTACK_PUBLIC_KEY', env('PAYSTACK_PUBLIC_KEY'))

  {{-- <script async src="https://static.addtoany.com/menu/page.js"></script> --}}
@endsection

@section('contents')


  <div ng-view></div>

@endsection
