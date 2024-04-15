<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('captured_imgs', function (Blueprint $table) {
            $table->id();
            $table->string("ButtonName");
            $table->string("NeckName");
            $table->string("PocketName");
            $table->string("HandName");
            $table->string("Image");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('captured_imgs');
    }
};
