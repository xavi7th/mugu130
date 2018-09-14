<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddSocialAccountsToUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('users', function (Blueprint $table) {
          $table->string('facebook')->after('address')->nullable();
          $table->string('twitter')->after('facebook')->nullable();
          $table->string('instagram')->after('address')->nullable();
          $table->string('telegram')->after('address')->nullable();

      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('users', function (Blueprint $table) {
          $table->dropColumn(['facebook', 'twitter', 'instagram', 'telegram']);
      });
    }
}
