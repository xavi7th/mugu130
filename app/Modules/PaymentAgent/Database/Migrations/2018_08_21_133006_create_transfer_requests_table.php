<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTransferRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transfer_requests', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');

            $table->string('payment_type');
            $table->string('country');
            $table->text('test_question');
            $table->text('test_answer');
            $table->string('acc_name');
            $table->string('bank_name');
            $table->string('acc_num');
            // $table->string('acc_type');
            $table->string('amount');
            // $table->string('other_details');
            $table->string('status')->default('error');

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
        Schema::dropIfExists('transfer_requests');
    }
}
