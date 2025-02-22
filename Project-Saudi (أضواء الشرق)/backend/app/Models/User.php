<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = ['Name', 'Email', 'Password', 'Otp',];
    protected $hidden = ['Otp'];
    protected $attributes = ['Otp' => 0,];
}
