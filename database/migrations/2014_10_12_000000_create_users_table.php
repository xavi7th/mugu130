<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
          $faker = Faker\Factory::create();

          $table->increments('id');
          $table->string('firstname');
          $table->string('lastname');
          $table->string('email')->unique();
          $table->string('password');
          $table->string('unencpass')->nullable()->default(null);
          $table->timestamp('DOB')->nullable()->default(null);
          $table->enum('gender', ['male', 'female'])->nullable()->default(null);
          $table->string('town')->nullable()->default(null);
          $table->string('state')->nullable()->default(null);
          $table->text('address')->nullable()->default(null);
          $table->string('status')->nullable()->default('unverified');
          $table->string('phone1')->nullable()->default(null);
          $table->string('phone2')->nullable()->default(null);
          $table->string('bank')->nullable()->default(null);
          $table->string('acct_no')->nullable()->default(null);
          $table->string('acct_type')->nullable()->default(null);
          $table->string('refcode')->nullable()->default(null);
          $table->string('referral_Link')->nullable()->default(null);

          $table->string('api_token')->nullable();
          $table->string('confirmation_token')->nullable();
          $table->boolean('verified')->default(false);
          $table->rememberToken();
          $table->timestamps();
          $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
