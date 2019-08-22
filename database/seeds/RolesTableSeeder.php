<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('roles')->delete();
        
        \DB::table('roles')->insert(array (
            0 => 
            array (
                'id' => 0,
                'name' => 'admin',
                'diaplay_name' => 'Administrator',
                'dashboard_route' => 'admin.dashboard',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 1,
                'name' => 'user',
                'diaplay_name' => 'Normal User',
                'dashboard_route' => 'dashboard',
                'created_at' => '0000-00-00 00:00:00',
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 2,
                'name' => 'paymentagent',
                'diaplay_name' => 'Payment Agent',
                'dashboard_route' => 'agent.dashboard',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 999,
                'name' => 'super_admin',
                'diaplay_name' => 'Super Administrator',
                'dashboard_route' => 'admin.dashboard',
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}