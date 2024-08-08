<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminAuth extends Model
{
    use HasFactory;
    protected $fillable = ["Name", "Email", "Password", "Otp", "Image", "Access_Token"];
    protected $attributes = ["Otp" => 0, "Access_Token" => 0];
}
