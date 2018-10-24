@extends('paymentagent::layouts.dashboard-master')

@section('contents')
  <transition :name="transitionName" mode="out-in" :duration="{ enter: 1300, leave: 200 }" v-on:change-transition="changeTransition($event)">
    <router-view></router-view>
  </transition>
@endsection

@section('customCSS')
    <style>

        .slide-left-enter-active,
        .slide-left-leave-active,
        .slide-right-enter-active,
        .slide-right-leave-active {
          transition-duration: 0.5s;
          transition-property: height, opacity, transform;
          transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
          overflow: hidden;
        }

        .slide-left-enter,
        .slide-right-leave-active {
          opacity: 0;
          transform: translate(2em, 0);
        }

        .slide-left-leave-active,
        .slide-right-enter {
          opacity: 0;
          transform: translate(-2em, 0);
        }

        .slide-fade-enter-active {
          transition: all .3s ease;
        }
        .slide-fade-leave-active {
          transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
          transform: translateX(10px);
          opacity: 0;
        }
    </style>
@endsection
