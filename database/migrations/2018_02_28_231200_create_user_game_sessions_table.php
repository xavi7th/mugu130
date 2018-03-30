<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserGameSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_game_sessions', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->nullable();
            $table->integer('game_id')->nullable();
            $table->boolean('status')->nullable()->default(true);
            $table->string('payment_status')->default('unpaid');
            $table->integer('score')->nullable();
            $table->double('earning')->default(0);
            $table->integer('position')->nullable();
            $table->timestamp('ended_at')->nullable();

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
        Schema::dropIfExists('user_game_sessions');
    }
}
