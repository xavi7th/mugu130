<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePaymentAgentTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payment_agent_transactions', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('payment_agent_id');
            $table->unsignedInteger('credited_user_id');
            $table->double('amount');
            $table->string('trans_type');
            $table->string('status');

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
        Schema::dropIfExists('payment_agent_transactions');
    }
}
