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
        Schema::create('admin_auths', function (Blueprint $table) {
            $table->id();
            $table->string("Name", 50);
            $table->string("Email", 100)->unique();
            $table->string("Password");
            $table->string("Otp", 6);
            $table->string("Image")->nullable();
            $table->string("Access_Token");
            $table->timestamp("Created_at")->useCurrent();
            $table->timestamp("Updated_at")->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admin_auths');
    }
};
