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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string("Title");
            $table->string("Project_name");
            $table->string("Developer");
            $table->string("Location");
            $table->string("Land_area");
            $table->string("Total_plot");
            $table->string("Contact_no");
            // $table->longText("Plot");
            $table->longText("Features");
            $table->longText("Project_map");

            $table->longText("Image");

            $table->enum("ProjectType", ["ongoing", "completed", "upcoming"]);
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
        Schema::dropIfExists('projects');
    }
};
