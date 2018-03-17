<?php

// use Faker\Generator as Faker;
use Faker\Factory as Faker;
use App\Package;
use App\Currency;
use App\NewsItem;
use App\CryptoSite;
use App\TeamMember;
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
$faker = Faker::create();

$factory->define(Currency::class, function () use($faker) {

    return [
      'name' => $faker->currencyCode,
      'symbol' => '$',

    ];
});

$factory->define(Package::class, function () use($faker) {


    return [
      'name' => $faker->domainWord,
      'amount' => mt_rand(10, 1000),
      'daily_percentage' => mt_rand(5, 12),
      'duration' => 12,

    ];
});

$factory->define(NewsItem::class, function () use($faker) {


    return [
      'title' => $faker->sentence,
      'summary' => $faker->text,
      'author' => $faker->name,
      'img' => 'https://lorempixel.com/400/250/?' . rand(8899, 76575),
      'news_date' => Carbon::now()->subDays(rand(0,30)),

    ];
});

$factory->define(TeamMember::class, function () use($faker) {

    return [
      'name' => $faker->name,
      'position' => $faker->jobTitle,
      'skill' => $faker->jobTitle,
      'img' => 'https://lorempixel.com/360/350/?' . rand(28654, 56575),

    ];
});

$factory->define(CryptoSite::class, function () use($faker) {

    return [
      'name' => $faker->name,
      'url' => $faker->url,
      'img' => 'https://lorempixel.com/360/350/?' . rand(28654, 56575),

    ];
});
