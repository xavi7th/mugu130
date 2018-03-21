<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->increments('id');
            $table->string('admin_id')->nullable()->default(null);
            $table->text('question')->nullable()->default(null);
            $table->string('option_1')->nullable()->default(null);
            $table->string('option_2')->nullable()->default(null);
            $table->string('option_3')->nullable()->default(null);
            $table->string('option_4')->nullable()->default(null);
            $table->string('correct_option')->nullable()->default(null);
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
        Schema::dropIfExists('questions');
    }
}
