<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Message;
use App\CryptoSite;
use App\NewsItem;
use App\TeamMember;
use Faker\Factory;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
    }
}


class MessagesTableSeeder extends Seeder{
   public function run(){

     Message::truncate();

       $faker = Factory::create();
       // following line retrieve all the user_ids from DB
       $users = User::all()->all();
       for($i=0; $i < 20; $i++){
         $users[] = User::find(1);
       }

       foreach(range(1,500) as $index){
           $u = $faker->optional($weight = 0.4, $default = 0)->randomElement($users);
           $message = Message::create([
							'sender_id' => $s = $u->id ?? 0,
              'senderusername' => $u->username ?? 'Admin',
              'receiver_id' =>  $s == 0 ? $faker->randomElement($users)->id : 0 ,
			        'subject'=>  $faker->unique()->catchPhrase,
			        'message'=>  $faker->realText(2800,2),
			        'created_at'=> $faker->dateTime($max = 'now'),
           ]);
       }
   }
}


class PackagesTableSeeder extends Seeder{
  public function run(){
   factory(App\Package::class, 7)->create();
  }
}


class CurrencyTableSeeder extends Seeder{
  public function run(){
   factory(App\Currency::class, 3)->create();
  }
}


class NewsItemsTableSeeder extends Seeder{
  public function run(){
   factory(App\NewsItem::class, 21)->create();
  }
}


class TeamMembersTableSeeder extends Seeder{
  public function run(){
  //  factory(App\TeamMember::class, 7)->create();
    // DB::beginTransaction();
      DB::statement("

              INSERT INTO `team_members` (`id`, `name`, `position`, `skill`, `img`, `created_at`, `updated_at`)
              VALUES
              	(2,'Barbara Martinez','Payments','','/storage/Members/1520716280.png','2018-03-09 12:16:23','2018-03-10 22:11:36'),
              	(3,'Amy Rogers','Blockchain Advisor',NULL,'/storage/Members/1520714900.png','2018-03-09 12:16:23','2018-03-10 21:48:29'),
              	(4,'Ann Brown','Digital Performance and User Acquisitions','','/storage/Members/1520715059.png','2018-03-09 12:16:23','2018-03-10 21:51:23'),
              	(5,'Ashley Giron','Energy Advisor','','/storage/Members/1520715163.png','2018-03-09 12:16:23','2018-03-10 21:53:07'),
              	(6,'Brian Matthew','Investment Advisor','','/storage/Members/1520716320.png','2018-03-09 12:16:23','2018-03-10 22:12:23'),
              	(8,'Collins Mark','Community and Social Media Manager',NULL,'/storage/Members/1520717355.png','2018-03-10 22:29:38','2018-03-10 22:29:38'),
              	(9,'George Chriostian','Brand Strategy',NULL,'/storage/Members/1520717435.png','2018-03-10 22:30:48','2018-03-10 22:30:48'),
              	(10,'Jean Hudson','Marketing and Communication Advisor',NULL,'/storage/Members/1520717460.png','2018-03-10 22:31:29','2018-03-10 22:31:29'),
              	(11,'John Brett','Co-founder, Energy',NULL,'/storage/Members/1520717515.png','2018-03-10 22:32:31','2018-03-10 22:32:31'),
              	(12,'Mary Smith','Investment',NULL,'/storage/Members/1520717569.png','2018-03-10 22:32:58','2018-03-10 22:32:58'),
              	(13,'Michael Reid','Data Scientist',NULL,'/storage/Members/1520717591.png','2018-03-10 22:33:25','2018-03-10 22:33:25'),
              	(14,'Miller Valerie','Content Manager, Investment',NULL,'/storage/Members/1520717631.png','2018-03-10 22:34:09','2018-03-10 22:34:09'),
              	(15,'Nolan Townsend','Security Expert',NULL,'/storage/Members/1520717659.png','2018-03-10 22:34:32','2018-03-10 22:34:32'),
              	(16,'Vytautas Aikimavicaus','Software Engineer',NULL,'/storage/Members/1520717693.png','2018-03-10 22:35:33','2018-03-10 22:35:33');

      ");
    // DB::commit();
  }
}

class CryptoSitesTableSeeder extends Seeder{
  public function run(){
   factory(App\CryptoSite::class, 7)->create();
  }
}

// public function run()
// {
//   factory(App\User::class, 2)->create()->each(function($u) {
//     $u->issues()->save(factory(App\Issues::class)->make());
//   });
// }
