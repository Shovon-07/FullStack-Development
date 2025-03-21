<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeContent extends Model
{
    use HasFactory;
    protected $fillable = ["BannerTitle", "BannerMoto", "BannerImage", "Map", "OurVission", "OurMission", "InvestWithUs","AboutUsTxt"];
}