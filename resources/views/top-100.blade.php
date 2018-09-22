@extends('layouts.app')

@section('contents')

  <style media="(max-width:767px)">
    #summary{
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }
    div#main-controller #others_intro{
      height: 130px;
    }
      div#main-controller .ui.buttons button {
        margin-bottom: 0;
      }

      input{
        margin-bottom: 10px !important;
      }
  </style>
  <style media="screen">

        .star.icon{
          color:#FF9800;
          font-size: .8em;
          margin-right: -10px;
        }
  </style>

  <section id="others_intro">
    <div class="grid-container">
      <div class="grid-100">
        <h1>FastPlay24 Top 100 Winners</h1>
      </div>

    </div>
  </section>

  <section id="others_contents">
    <div class="grid-container">
      <div class="grid-100 tablet-grid-90 tablet-push-5" style="text-align: center;">
        <div class="ui blue segment">
          <h4>View a preview of the all time top 100 winners on fastplay24. You too can be a winner</h4>
        </div>
        <div class="ui raised segment">
          <div class="ui four stackable doubling cards">
            @foreach ($top100 as $record)
              <div class="card">
                <div class="image">

                </div>
                <div class="content">
                  <a class="header ng-binding">{{ $record->user->firstname }}
                    @if ($record->user_earnings > 40000 )
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                    @elseif($record->user_earnings > 20000 )
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                    @elseif($record->user_earnings > 10000 )
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                    @elseif($record->user_earnings > 5000 )
                      <i class="star icon"></i>
                      <i class="star icon"></i>
                    @elseif($record->user_earnings > 2000 )
                      <i class="star icon"></i>
                    @endif
                  </a>

                  <div class="meta">
                    <span class="date ng-binding">Joined {{ $record->user->created_at->diffForHumans() }}</span>
                  </div>
                  {{-- <div class="description">
                    <!-- ngIf: e.user.id == 1145 -->
                    <!-- ngIf: e.user.id == 287000 -->
                    <!-- ngIf: e.user.id == 505 -->
                  </div>
                  <div class="description" style="font-size: 1.2em;">
                    <br><br>
                    <!-- ngIf: e.user.id == 1145 -->
                    <!-- ngIf: e.user.id == 287000 -->
                    <!-- ngIf: e.user.id == 505 -->
                  </div> --}}
                </div>
                <div class="extra content">
                  <a class="ng-binding">
                    <i class="bullhorn icon"></i>
                    <b>EARNINGS:</b> ₦{{ $record->user_earnings }}
                  </a>
                </div>
              </div>
            @endforeach
          </div>
        </div>


      </div>
    </div>
  </section>

@endsection
