<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->increments('id');
            $table->boolean('status')->default(true);
            $table->integer('num_of_players')->nullable();
            $table->integer('max_winners')->nullable();
            $table->double('total_prize')->nullable();
            $table->integer('total_winners')->nullable(); //num of those that really won
            $table->double('amount_won')->nullable(); //num of those that really won
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
        Schema::dropIfExists('games');
    }
}
