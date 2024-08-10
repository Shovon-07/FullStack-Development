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
        Schema::create('home_contents', function (Blueprint $table) {
            $table->id();
            $table->string("BannerTitle");
            $table->string("BannerMoto");
            $table->longText("BannerImage");
            $table->longText("Map");
            $table->longText("OurVission");
            $table->longText("OurMission");
            $table->longText("InvestWithUs");
            $table->longText("AboutUsTxt");

            $table->timestamp("Created_at")->useCurrent();
            $table->timestamp("Updated_at")->useCurrent()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('home_contents');
    }
};
