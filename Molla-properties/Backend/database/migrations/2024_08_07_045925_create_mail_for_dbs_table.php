<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mail_for_dbs', function (Blueprint $table) {
            $table->id();
            $table->string("Name");
            $table->string("Email");
            $table->longText("Subject");
            $table->longText("Message");

            $table->timestamp("Created_at")->useCurrent();
            $table->timestamp("Updated_at")->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_for_dbs');
    }
};
