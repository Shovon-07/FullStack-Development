<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    private $fillable = ["Name", "Email", "Password", "Otp", "Access_Token"];
    private $attributes = ["Otp" => 0, "Access_Token" => 0];
}
