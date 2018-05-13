@extends('layouts.app')

@section('contents')

  <section id="others_intro">
    <div class="grid-container">
      <div class="grid-40">
        <h1>Calculator</h1>
      </div>

    </div>
  </section>

  <section id="others_contents">
    <div class="grid-container">
      <div class="grid-70 push-15 tablet-grid-80 tablet-push-10" style="text-align: center;">

        <div class="ui raised segment">

          @if (count($errors) > 0)
            <div class="ui compact error message">
              <div class="header">
                @foreach ($errors->all() as $error)
                  {{ $error }}
                @endforeach
              </div>
            </div>
          @endif

          @if (session('status'))
            <div class="ui compact success message">
              <div class="header">
                Notice
              </div>
              <p>{{ session('status') }}</p>
            </div>
          @endif

          <form class="ui form" action="" method="post">

            {{ csrf_field() }}

            <div class="inline fields">
               <div class="field">
                 <input type="number" min="2" max="100000" name="nop" class="form-control" placeholder="No of Players" value="" style="min-width: 200px">
               </div>
               <div class="field">
                 <div class="ui buttons">
                   <button class="ui positive button" type="submit" name="btnsub">Submit</button>
                   <div class="or"></div>
                   <button class="ui button" type="button" name="btnref" onclick="location.reload()">Refresh</button>
                 </div>
               </div>
             </div>
          </form>
        </div>

@if (isset($total_players))

        <div class="ui red segment">
              <?php
                          $max_winners = 0.1 * $total_players;
                          $possible_winners = ceil($max_winners);
                          $total_prize_money = 30 * $total_players;
                          $total_shared_price = 25 * $total_players;
              ?>

          <div class="ui raised horizontal segments">
            <div class="ui segment">
              <div class="ui labeled button" tabindex="-1">
                <div class="ui button">
                  <i class="heart icon"></i> Players
                </div>
                <a class="ui basic label">
                  {{ $total_players }}
                </a>
              </div>
            </div>

            <div class="ui segment">
              <div class="ui left labeled button" tabindex="-1">
                <a class="ui basic right pointing label">
                  {{ $possible_winners }}
                </a>
                <div class="ui button">
                  <i class="heart icon"></i> Winners
                </div>
              </div>
            </div>

            <div class="ui segment">
              <div class="ui labeled button floated right" tabindex="-1">
                <div class="ui icon button">
                  <i class="fork icon"></i>Total Prize Money
                </div>
                <a class="ui basic label">
                  ₦{{ $total_prize_money }}
                </a>
              </div>
            </div>
          </div>

          <table class="ui  striped celled table" style="text-align: center;">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Position</th>
                <th>Prize</th>
              </tr>
            </thead>

            <tbody>

              <?php

                $prz = array();
                $ration = array();
                $sum_slice = 0;
                for ($i = 1; $i <= $possible_winners; $i++) {
                  $rate = pow(1.06381, $possible_winners-$i);
                  $ration[] = $rate;
                }
                $sum_ration = array_sum($ration);
                foreach ($ration as $val) {
                  $price[] = floor(($val/$sum_ration) * $total_shared_price);
                  $prz[] = floor((($val/$sum_ration) * $total_shared_price) + 5);
                }
                $jj = $possible_winners;
                $ii = 0;
                $pp = 1;
                $sliced_array = array_slice($price, 0, $jj);
                $sum_slice = array_sum($sliced_array);

                // $sum_prz = array_sum($prz);
                $spill  = $total_shared_price - $sum_slice;
                array_push($prz, "5");
                $przcnt = count($prz);

                for ($i = 1; $i <= $total_players; $i++):
                  if($ii >= $jj ){
                    $ii = $przcnt - 1;
                  }
              ?>

                  <tr>
                    <td> {{ $i }}</td>
                    <td>{{ $pp }}</td>
                    <td>{{ $prz[$ii] }}</td>
                  </tr>
                
              <?php
                  if($pp <= $jj ){
                        $pp = $pp + 1;
                        $ii = $ii + 1;
                      }
                endfor;
              ?>

            </tbody>
          </table>
        </div>
@endif


      </div>
    </div>
  </section>

@endsection