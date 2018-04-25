<?php

use Illuminate\Database\Seeder;
use App\User;
use Faker\Factory;
use Carbon\Carbon;

class UsersTableSeeder extends Seeder{
  public function run(){
    $faker = Factory::create();
    // $faker = Factory::create('en_NG');
    // User::truncate();

    User::create([
      'firstname' => $faker->firstName,
      'lastname' => $faker->lastName,
      'email' => 'xa@y.com',
      'password' => 'pass',
      'DOB' => Carbon::now()->subYears(rand(25, 45)),
      'gender' => 'male',
      'town' => $faker->city,
      'state' => $faker->state,
      'address' => $faker->address,
      'phone1' => $faker->e164PhoneNumber,
      'network' => $faker->randomElement(['mtn', 'airtel', 'etisalat', 'glo']),
      'bank' => $faker->word,
      'acct_no' => $faker->unique()->bankAccountNumber,
      'acct_type' => 'savings',

      'created_at'=> Carbon::now()->subDays(150),
      ]);

      factory(User::class, 30)->create();

  }
}
