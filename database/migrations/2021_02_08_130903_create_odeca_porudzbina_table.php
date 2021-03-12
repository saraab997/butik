<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdecaPorudzbinaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('odeca_porudzbina', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('odeca_id');
            $table->foreign('odeca_id')->references('id')->on('odeca')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('porudzbina_id');
            $table->foreign('porudzbina_id')->references('id')->on('porudzbina')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('odeca_porudzbina');
    }
}
