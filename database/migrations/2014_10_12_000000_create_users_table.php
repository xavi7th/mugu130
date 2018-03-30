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
          $table->string('unencpass')->nullable();
          $table->timestamp('DOB')->nullable();
          $table->enum('gender', ['male', 'female'])->nullable();
          $table->string('town')->nullable();
          $table->string('state')->nullable();
          $table->text('address')->nullable();
          $table->string('status')->nullable()->default('unverified');
          $table->string('phone1')->nullable();
          $table->string('phone2')->nullable();
          $table->string('bank')->nullable();
          $table->string('acct_no')->nullable();
          $table->string('acct_type')->nullable();
          $table->string('refcode')->nullable();
          $table->string('referral_Link')->nullable();

          $table->double('available_units')->default(0);
          $table->double('units_purchased')->default(0);

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
