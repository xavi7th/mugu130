<?php

use Illuminate\Database\Seeder;
use App\Slide;

class SlidesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Slide::create([
              'h2' => 'BEYOND',
              'h2_color' => 'white',
              'greenspan' => 'CRYPTO MINING',
              'p' => 'We were established in 2017, offering a vast range of opportunities to help investors for making the best investment portfolio..',
              'p_color' => 'white',
              'bkg_img' => 'https://cloudhash.live/styles/images/daily-img.png',
              'prev_p' => 'Good work',
              'prev_span' => 'find your next stuff',
              'text_pos' => 'right',
        ]);

        Slide::create([
              'h2' => 'ACCUMULATIVE ',
              'h2_color' => 'white',
              'greenspan' => 'INTEREST',
              'p' => ' Strongly Followed by different ICOs left the world with two major crypto-coins like Bitcoin and Ether.',
              'p_color' => 'black',
              'bkg_img' => 'https://cloudhash.live/styles/images/top-bg.jpg',
              'prev_p' => 'Accumulative Interest',
              'text_pos' => 'center',
              'prev_span' => 'Strongly Followed by different ICOs',
        ]);

        Slide::create([
              'h2' => 'SUPER ',
              'h2_color' => 'black',
              'greenspan' => 'SAVINGS+',
              'p' => ' 300% AFTER 5 DAYS',
              'p_color' => 'white',
              'bkg_img' => 'https://cloudhash.live/styles/images/daily-img.png',
              'prev_p' => 'Super savings',
              'prev_span' => '300% AFTER 5 DAYS',
              'text_pos' => 'left',
        ]);

        Slide::create([
              'h2' => 'FULLY ',
              'h2_color' => 'black',
              'greenspan' => 'CERTIFIED',
              'p' => ' We are a fully certified and licensed company. Our license number is: 20015612',
              'p_color' => 'white',
              'bkg_img' => 'https://cloudhash.live/styles/images/daily-img.png',
              'prev_p' => 'We are fully certified',
              'text_pos' => 'right',
              'prev_span' => '300% AFTER 5 DAYS',
        ]);
    }
}
