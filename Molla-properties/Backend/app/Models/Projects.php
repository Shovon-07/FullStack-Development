<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;
    protected $fillable = ["Title", "Project_name", "Developer", "Location", "Land_area", "Total_plot", "Contact_no", "Features", "Project_map", "Image", "Status"];
}
