@extends('layouts.app')

@section('contents')
  @javascript('errors', $errors)

  <div ng-view></div>

  <input type="text" ng-model="kuh" name="" value=""> @{{ kuh }}
  


@endsection
