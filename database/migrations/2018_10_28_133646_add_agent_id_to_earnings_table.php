<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAgentIdToEarningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::table('earnings', function (Blueprint $table) {
          $table->unsignedInteger('agent_id')->after('user_id')->nullable();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
      Schema::table('earnings', function (Blueprint $table) {
          $table->dropColumn(['agent_id']);
      });
    }
}
