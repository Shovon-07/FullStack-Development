<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CapturedImg extends Model
{
    use HasFactory;
    protected $fillable = ['ButtonName','NeckName','PocketName', 'HandName', 'Image'];
}
