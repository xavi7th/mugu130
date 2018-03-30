<?php

// use Faker\Generator as Faker;
use Faker\Factory as Faker;
use Carbon\Carbon;
use App\Game;
use App\User;
use App\Question;
use App\UserQuestion;
use App\UserGameSession;

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
$faker = Faker::create();

$factory->define(Question::class, function ($faker) {

    return [
        'question' => $faker->text,
        'option_1' => $option1 = $faker->unique()->sentence,
        'option_2' => $option2 = $faker->unique()->sentence,
        'option_3' => $option3 = $faker->unique()->sentence,
        'option_4' => $option4 = $faker->unique()->sentence,
        'correct_option' => $faker->randomElement([$option1, $option2, $option3, $option4]),
    ];
});

$factory->define(Game::class, function ($faker) {

    return [
        'status' => 0,
        'created_at' => $created_at = Carbon::now()->subMinutes(rand(12,60)),
        'ended_at' => $created_at->addMinutes(10),
    ];
});


$factory->define(UserQuestion::class, function ($faker) {

    $userIDs = User::all()->pluck('id')->all();
    $gameID = Game::latest()->limit(1)->get(['id'])->all();
    $questionIDs = Question::all()->pluck('id')->all();

    return [
        'user_id' => $faker->randomElement($userIDs),
        'question_id' => $faker->randomElement($questionIDs),
        'game_id' => $faker->randomElement($gameID),
        'answered_option' => $faker->catchPhrase,
        'verdict' => rand(0, 1),
        // 'images' => '/storage/tmp/s' . $faker->randomElement($categoryIDs) .'.jpg',
        // 'details' => $faker->realText($maxNbChars = 4200, $indexSize = 2),
    ];
});

$factory->define(UserGameSession::class, function ($faker) {

    $userIDs = User::all()->pluck('id')->all();
    $gameID = Game::latest()->limit(1)->get(['id'])->all();
    $gameStart = Game::latest()->limit(1)->first(['created_at']);

    // $questionIDs = Brand::all()->pluck('id')->all();

    return [
        'user_id' => $faker->randomElement($userIDs),
        'game_id' => $faker->randomElement($gameID),
        'score' => rand(3,10),
        'status' => 1,
        'ended_at' => Carbon::parse($gameStart->created_at)->addMinutes(rand(4,10)),
        'created_at' => Carbon::parse($gameStart->created_at)->addMinutes(rand(0,2)),
        // 'images' => '/storage/tmp/s' . $faker->randomElement($categoryIDs) .'.jpg',
        // 'details' => $faker->realText($maxNbChars = 4200, $indexSize = 2),
    ];
});
