<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LatestProject extends Model
{
    use HasFactory;
    protected $fillable = ["Title", "Description", "Image", "Status"];
    protected $attributes = ["Status" => "Available",];
}
