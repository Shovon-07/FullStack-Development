<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MailForDb extends Model
{
    use HasFactory;
    protected $fillable = ["Name", "Email", "Subject", "Message", "Status"];
    protected $attributes = ["Status" => 1,];
}
