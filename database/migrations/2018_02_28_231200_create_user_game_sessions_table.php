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
            $table->string('user_id')->nullable()->default(null);
            $table->string('game_id')->nullable()->default(null);
            $table->string('status')->nullable()->default('true');
            $table->string('duration')->nullable()->default(null);
            $table->string('earning')->nullable()->default(null);
            $table->string('position')->nullable()->default(null);
            $table->string('ended_at')->nullable()->default(null);
            $table->timestamps();
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
