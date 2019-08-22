<?php

use Illuminate\Database\Seeder;

class DemoQuestionsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('demo_questions')->delete();
        
        \DB::table('demo_questions')->insert(array (
            0 => 
            array (
                'id' => 1,
                'admin_id' => NULL,
                'question' => 'Who succeeded Barack Obama as the President of The United States of America?',
                'option_1' => 'Alicia Keys',
                'option_2' => 'Hilary Clinton',
                'option_3' => 'Serena Williams',
                'option_4' => 'Donald Trump',
                'correct_option' => 'Donald Trump',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            1 => 
            array (
                'id' => 2,
                'admin_id' => NULL,
                'question' => 'When did Nigeria gain her independence?',
                'option_1' => '1956',
                'option_2' => '1974',
                'option_3' => '1960',
                'option_4' => '1962',
                'correct_option' => '1960',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            2 => 
            array (
                'id' => 3,
                'admin_id' => NULL,
                'question' => 'NOLLYWOOD belongs to which country?',
                'option_1' => 'France',
                'option_2' => 'Japan',
                'option_3' => 'Belgium',
                'option_4' => 'Nigeria',
                'correct_option' => 'Nigeria',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            3 => 
            array (
                'id' => 4,
                'admin_id' => NULL,
                'question' => 'Who succeeded Fashola as the Governor of Lagos State?',
                'option_1' => 'Ambode',
                'option_2' => 'Oshomole',
                'option_3' => 'Ibori',
                'option_4' => 'Falana',
                'correct_option' => 'Ambode',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            4 => 
            array (
                'id' => 5,
                'admin_id' => NULL,
                'question' => 'Which Nigerian artist is popularly known as the Koko Master?',
                'option_1' => 'Davido',
                'option_2' => 'Don Jazzy',
                'option_3' => 'Olamide',
                'option_4' => 'Dbanj',
                'correct_option' => 'Dbanj',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            5 => 
            array (
                'id' => 6,
                'admin_id' => NULL,
            'question' => 'How many states are in Nigeria? (Excluding the FCT)',
                'option_1' => '34',
                'option_2' => '32',
                'option_3' => '36',
                'option_4' => '43',
                'correct_option' => '36',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            6 => 
            array (
                'id' => 7,
                'admin_id' => NULL,
                'question' => 'What is the Business capital of Nigeria?',
                'option_1' => 'Abuja',
                'option_2' => 'Lagos',
                'option_3' => 'Kano',
                'option_4' => 'Warri',
                'correct_option' => 'Lagos',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            7 => 
            array (
                'id' => 8,
                'admin_id' => NULL,
                'question' => 'Who is Patience Jonathan married to?',
                'option_1' => 'Olu Jacobs',
                'option_2' => 'Goodluck Ebele',
                'option_3' => 'Pete Edochie',
                'option_4' => 'Sammie Loco Efe',
                'correct_option' => 'Goodluck Ebele',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            8 => 
            array (
                'id' => 9,
                'admin_id' => NULL,
                'question' => 'My wife belongs to my kitchen, bedroom and the __________',
                'option_1' => 'other rooms',
                'option_2' => 'toilet',
                'option_3' => 'palour',
                'option_4' => 'bar',
                'correct_option' => 'other rooms',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            9 => 
            array (
                'id' => 10,
                'admin_id' => NULL,
                'question' => 'What are the names of the twin artists known as Psquare?',
                'option_1' => 'Patrick & Peter',
                'option_2' => 'Patrice and Paulinus',
                'option_3' => 'Peter and Paul',
                'option_4' => 'Patricia and Paulina',
                'correct_option' => 'Peter and Paul',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
            10 => 
            array (
                'id' => 11,
                'admin_id' => NULL,
                'question' => 'What is the name of Barrack Obama\'s Wife?',
                'option_1' => 'Michelle',
                'option_2' => 'Sophia',
                'option_3' => 'Ejiro',
                'option_4' => 'Funke',
                'correct_option' => 'Michelle',
                'created_at' => '2018-05-20 15:49:30',
                'updated_at' => '2018-05-20 15:49:30',
            ),
        ));
        
        
    }
}