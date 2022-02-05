<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SpoljniKljuc extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('televizor', function (Blueprint $table) {
            $table->unsignedBigInteger('firma_id');
            $table->foreign('firma_id')->references('id')->on('firma')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('televizor', function (Blueprint $table) {
            $table->dropForeign('televizor_firma_id_foreign');
            $table->removeColumn('firma_id');
        });
    }
}
