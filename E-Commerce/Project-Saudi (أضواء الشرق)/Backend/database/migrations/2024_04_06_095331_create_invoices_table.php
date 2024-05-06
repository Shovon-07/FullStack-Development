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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('customer_id');
            $table->foreign('customer_id')->references('id')->on('customers')
                ->cascadeOnUpdate()->restrictOnDelete();
            $table->string('image');
            $table->string('dress_type');
            $table->string('button_type');
            $table->string('neck_type');
            $table->string('pocket_type');
            $table->string('hand_type');
            
            $table->unsignedBigInteger('material_id');
            $table->foreign('material_id')->references('id')->on('materials')
                ->cascadeOnUpdate()->restrictOnDelete();
            $table->unsignedBigInteger('material_id_2')->nullable();
            $table->foreign('material_id_2')->references('id')->on('materials')
                    ->cascadeOnUpdate()->restrictOnDelete();
            $table->unsignedBigInteger('material_id_3')->nullable();
            $table->foreign('material_id_3')->references('id')->on('materials')
                ->cascadeOnUpdate()->restrictOnDelete();
            $table->unsignedBigInteger('material_id_4')->nullable();
            $table->foreign('material_id_4')->references('id')->on('materials')
                ->cascadeOnUpdate()->restrictOnDelete();
                
                
            $table->integer('chest_length');
            $table->integer('sleeve_length');
            $table->integer('neck_length');
            $table->integer('cuff_length');
            $table->integer('hand_length');
            $table->integer('shoulder_length');            
            $table->integer('dress_length');
            
            $table->string('material_length');
            $table->string('material_length_2')->nullable();
            $table->string('material_length_3')->nullable();
            $table->string('material_length_4')->nullable();
            
            $table->string('sale_price');
            $table->integer('quantity');
            $table->string('total');
            $table->string('discount');
            $table->string('vat');
            $table->string('payable');
            $table->string('advance');
            $table->string('due');
            $table->string('deadline_date');
            $table->string('collection')->default(0);
            $table->string('net_outstanding')->default(0);            
            $table->string('delivery_date')->nullable();
            $table->string('inqueries_number')->nullable();
            $table->string('shop_phone')->nullable();
            $table->string('note')->nullable();
            $table->enum('status',['pending','cancel','complete','delivery'])->default('pending');           

            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
