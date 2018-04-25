<?php

use Faker\Generator as Faker;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

// $ngfaker = Faker::create();
// $ngfaker = Faker::create('en_NG');
$factory->define(App\User::class, function (Faker $faker) {
    return [
      'firstname' => $faker->firstName,
      'lastname' => $faker->lastName,
      'email' => $faker->unique()->email,
      'password' => 'pass',
      'DOB' => Carbon::now()->subYears(rand(25, 45)),
      'gender' => $faker->randomElement(['male', 'female']),
      'town' => $faker->city,
      'state' => $faker->state,
      'address' => $faker->address,
      'phone1' => $faker->unique()->e164PhoneNumber,
      'network' => $faker->randomElement(['mtn', 'airtel', 'etisalat', 'glo']),
      'bank' => $faker->word,
      'acct_no' => $faker->unique()->bankAccountNumber,
      'acct_type' => $faker->randomElement(['savings', 'current']),

      'created_at'=> Carbon::now()->subDays(150),
    ];
});
