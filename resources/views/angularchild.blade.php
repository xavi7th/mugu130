@extends('layouts.angular-master')

@section('contents')
  <base href="/angularroute">

  <div ng-view></div>

  <p>NOT controlled by controller</p>
  <input type="text" name="" value="" ng-model="favColor" placeholder="Type your fav colors">

  <p>Your fav colors id @{{favColor}}</p>
  <a href="angularroute">angular-route</a>
  <a href="/angularrout">angular-rout</a>

@endsection
