<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HonorableClient extends Model
{
    use HasFactory;
    protected $fillable = ["HonorableClientName","HonorableClient_img","Project_id"];
}
