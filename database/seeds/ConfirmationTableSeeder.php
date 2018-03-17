<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Confirmation;
use Faker\Factory;
use Carbon\Carbon;

class ConfirmationTableSeeder extends Seeder{
   public function run(){

       $faker = Factory::create();
       // following line retrieve all the user_ids from DB
       $users = User::where('tracker', 'requests help')->get()->all();

       foreach(range(1,3) as $index){
            $user = $faker->unique()->randomElement($users);
        		Confirmation::create([
									'gher_id' => $user->id ,
									'numofpaymnts' => '0',
                  'thisghamt' => $user->expectedgh - $user->expectedgh%500,
									'thisghdate' => Carbon::now()->subDays(rand(1,30))->toDateTimeString(),
									'updated_at' => Carbon::now()->subDays(rand(1,30))->toDateTimeString(),
									'created_at' => Carbon::now()->subDays(rand(1,30))->toDateTimeString(),
                  'pher_id' => null,
									'phamt' => null,
									'pherupload' => null,
									'pherconfirmstatus' => null,
           	]);
       }
   }
}
