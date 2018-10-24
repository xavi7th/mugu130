<?php

namespace App\Modules\PaymentAgent\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Modules\PaymentAgent\Models\Transaction;
use App\User;
use Faker\Factory;
use Carbon\Carbon;

class PaymentAgentDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(TransactionsTableSeeder::class);
    }
}


class TransactionsTableSeeder extends Seeder{

  public function run(){
		 Transaction::truncate();

       $faker = Factory::create();
       // following line retrieve all the user_ids from DB
       $userIDs = User::all()->pluck('id')->all();
      //  $usernames = \App\Models\User::all()->pluck('username')->all();

       foreach(range(1,1550) as $index){
           Transaction::create([
							'user_id' => $faker->randomElement($userIDs),
			        'trans_type'=>  $faker->randomElement(['credit', 'credit', 'credit', 'debit']),
			        'amount'=>  rand(10, 1927),
			        'description'=>  $faker->realText(200,2),
							'trans_date'=> Carbon::now()->subDays(rand(10,20)),
			        'created_at'=> Carbon::now()->subDays(rand(18, 35)),
           ]);
       }
   }
}
