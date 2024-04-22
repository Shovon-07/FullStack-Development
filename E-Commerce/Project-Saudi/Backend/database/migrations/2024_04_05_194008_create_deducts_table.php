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
        Schema::create('deducts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('material_id');

            $table->foreign('material_id')->references('id')->on('materials')
            ->cascadeOnUpdate()->restrictOnDelete();
            
            // $table->string('deduct');
            $table->decimal('deduct',8,2);

            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deducts');
    }
};
