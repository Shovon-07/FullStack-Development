<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = ['customer_id','image','neck_type','hand_type','button_type','pocket_type','material_id','chest_length','sleeve_length','neck_length','cuff_length','hand_length','shoulder_length','dress_length','material_length','sale_price','total','discount','vat','payable','advance','due','deadline_date','collection','net_outstanding','delivery_date','inqueries_number','note','status'];

    function customer():BelongsTo{
        return $this->belongsTo(Customer::class);
    }
}
