@extends('layouts.app')

@section('contents')

  @javascript('refdetails', $refdetails)

  <div ng-view></div>
  <input type="text" ng-model="kuh" name="" value=""> @{{ kuh }}
  
@endsection
