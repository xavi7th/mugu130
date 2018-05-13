<?php

// use Faker\Generator as Faker;
use Faker\Factory as Faker;
use Carbon\Carbon;
use App\Game;
use App\User;
use App\Question;
use App\UserQuestion;
use App\DemoQuestion;
use App\UserGameSession;
use App\DemoGameSession;

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
        'correct_option' => $faker->randomElement([$option4]),
    ];
});

$factory->define(DemoQuestion::class, function ($faker) {

    return [
        'question' => $faker->text,
        'option_1' => $option1 = $faker->unique()->sentence,
        'option_2' => $option2 = $faker->unique()->sentence,
        'option_3' => $option3 = $faker->unique()->sentence,
        'option_4' => $option4 = $faker->unique()->sentence,
        'correct_option' => $faker->randomElement([$option4]),
    ];
});

$factory->define(Game::class, function ($faker) {

    return [
        'status' => 0,
        'created_at' => $created_at = Carbon::now()->subMinutes(rand(12,60)),
        'ended_at' => $created_at->addMinutes(10),
        'num_of_players' => $numofplayers = rand(56,101),
        'max_winners' => ceil($numofplayers/ env('PERCENT_WINNERS')),
        'total_prize' => $totalprize = $numofplayers * (env('GAME_CREDITS') - 10),
        'total_winners' => $totalwinners = rand(2,10),
        'amount_won' => $totalwinners * (env('GAME_CREDITS') - 10),
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

$factory->define(DemoGameSession::class, function ($faker) {

    $time = DemoGameSession::where('session_id', session('game_id'))->first(['created_at']);

    return [
        'session_id' => session('demo_id'),
        'game_id' => 0,
        'score' => rand(3,9),
        'status' => 1,
        'ended_at' => Carbon::parse($time)->addMinutes(rand(4,10)),
        'created_at' => Carbon::parse($time)->addMinutes(rand(-2,7)),
        'earning' => 5
    ];
});
