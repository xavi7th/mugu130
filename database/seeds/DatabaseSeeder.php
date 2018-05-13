<?php

use App\Game;
use App\User;
use App\Message;
use App\Question;
use App\Referral;
use App\UserQuestion;
use App\DemoQuestion;
use App\UserGameSession;
use App\DemoGameSession;

use Faker\Factory;

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(ReferralsTableSeeder::class);
        $this->call(DemoQuestionsTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(GamesTableSeeder::class);
        $this->call(UserGameSessionsTableSeeder::class);
        // $this->call(DemoGameSessionsTableSeeder::class);
        $this->call(UserQuestionsTableSeeder::class);
    }
}



class MessagesTableSeeder extends Seeder{
   public function run(){

     Message::truncate();

       $faker = Factory::create();
       // following line retrieve all the user_ids from DB
       $users = User::all()->all();
       for($i=0; $i < 20; $i++){
         $users[] = User::find(1);
       }

       foreach(range(1,500) as $index){
           $u = $faker->optional($weight = 0.4, $default = 0)->randomElement($users);
           $message = Message::create([
							'sender_id' => $s = $u->id ?? 0,
              'senderusername' => $u->username ?? 'Admin',
              'receiver_id' =>  $s == 0 ? $faker->randomElement($users)->id : 0 ,
			        'subject'=>  $faker->unique()->catchPhrase,
			        'message'=>  $faker->realText(2800,2),
			        'created_at'=> $faker->dateTime($max = 'now'),
           ]);
       }
   }
}

class ReferralsTableSeeder extends Seeder{
   public function run(){

       $faker = Factory::create();
       // following line retrieve all the user_ids from DB
       $users = User::all()->pluck('id')->all();
       foreach(range(1,150) as $index){
           Referral::create([
							'user_id' => $faker->randomElement($users),
							'referral_id'=> $faker->randomElement($users),
			        'created_at'=> Carbon::now()->subDays(rand(1,200)),
           ]);
       }
   }
}

class QuestionsTableSeeder extends Seeder{
  public function run()
     {
         factory(Question::class, 1000)->create();
     }
}

class DemoQuestionsTableSeeder extends Seeder{
  public function run()
     {
         factory(DemoQuestion::class, 20)->create();
     }
}

class GamesTableSeeder extends Seeder{
  public function run()
     {
         factory(Game::class, 10)->create();
     }
}

class UserGameSessionsTableSeeder extends Seeder{
  public function run()
     {
         factory(UserGameSession::class, 100)->create();
     }
}

class DemoGameSessionsTableSeeder extends Seeder{
  public function run()
     {
       $total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * request()->input('details.total_examinees');
       $max_winners = ceil(request()->input('details.total_examinees') / env('PERCENT_WINNERS'));
       $sum = 0;
       $time = DemoGameSession::where('session_id', session('game_id'))->first(['created_at']);
       $winners = rand(3,$max_winners);


       for ($i=0; $i < $max_winners; $i++) {
         $sum += (pow(1.06381, $i));
       }

       $firstprice = ($total_stake/$sum) * (pow(1.06381, $max_winners - 1));

       for ($i=0; $i < $winners; $i++) {
         DemoGameSession::create([
           'session_id' => session('demo_id'),
           'game_id' => 0,
           'score' => 10,
           'status' => 1,
           'ended_at' => Carbon::parse($time)->addMinutes(1),
           'created_at' => Carbon::parse($time)->addMinutes(rand(-2,-1)),
           'earning' => floor($firstprice /= 1.06381) + env('BASIC_PARTICIPATION_REWARD')
         ]);

       }

       return 'hey';

      // factory(DemoGameSession::class, (request()->input('details.total_examinees')) - $winners )->create();
     }
}

class LoserDemoGameSessionsTableSeeder extends Seeder{
  public function run()
     {
       $total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * request()->input('details.total_examinees');
       $max_winners = ceil(request()->input('details.total_examinees') / env('PERCENT_WINNERS'));
       $sum = 0;
       $time = DemoGameSession::where('session_id', session('game_id'))->first(['created_at']);
       $winners = $max_winners;


       for ($i=0; $i < $max_winners; $i++) {
         $sum += (pow(1.06381, $i));
       }

       $firstprice = ($total_stake/$sum) * (pow(1.06381, $max_winners - 1));

       DemoGameSession::create([
         'session_id' => session('demo_id'),
         'game_id' => 0,
         'score' => 10,
         'status' => 1,
         'ended_at' => Carbon::parse($time)->addMinutes(rand(0,1)),
         'created_at' => Carbon::parse($time)->addMinutes(rand(-2,-1)),
         'earning' => $firstprice + env('BASIC_PARTICIPATION_REWARD')
       ]);

       for ($i=0; $i < $winners; $i++) {
         DemoGameSession::create([
           'session_id' => session('demo_id'),
           'game_id' => 0,
           'score' => 10,
           'status' => 1,
           'ended_at' => Carbon::parse($time)->addMinutes(rand(1,2)),
           'created_at' => Carbon::parse($time)->addMinutes(rand(-2,-1)),
           'earning' => floor($firstprice /= 1.06381) + env('BASIC_PARTICIPATION_REWARD')
         ]);

       }

      // factory(DemoGameSession::class, (request()->input('details.total_examinees')) - $winners )->create();
     }
}

class UserQuestionsTableSeeder extends Seeder{
  public function run()
     {
         factory(UserQuestion::class, 1100)->create();
     }
}

// public function run()
// {
//   factory(App\User::class, 2)->create()->each(function($u) {
//     $u->issues()->save(factory(App\Issues::class)->make());
//   });
// }
