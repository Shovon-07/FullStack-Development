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
        Schema::create('latest_projects', function (Blueprint $table) {
            $table->id();
            $table->string("Title");
            $table->string("Description");
            $table->longText("Image");
            $table->enum("Status", ["Available", "Sold", "Rejected"]);

            $table->timestamp("Created_at")->useCurrent();
            $table->timestamp("Updated_at")->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('latest_projects');
    }
};
