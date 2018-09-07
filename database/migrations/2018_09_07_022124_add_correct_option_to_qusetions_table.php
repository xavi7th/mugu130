<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCorrectOptionToQusetionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('user_questions', function (Blueprint $table) {
          $table->string('correct_option')->after('question_id')->default('N/A');
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('user_questions', function (Blueprint $table) {
          $table->dropColumn('correct_option');
      });
    }
}
