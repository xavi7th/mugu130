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
         factory(DemoGameSession::class, request()->input('details.total_examinees'))->create();
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
