<?php

namespace App\Models;

use App\Models\Customer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Invoice extends Model
{
    use HasFactory;
    protected $fillable = ['customer_id','image','dress_type','neck_type','hand_type','button_type','pocket_type','material_id','material_id_2','material_id_3','material_id_4','chest_length','sleeve_length','neck_length','cuff_length','hand_length','shoulder_length','dress_length','material_length','material_length_2','material_length_3','material_length_4','sale_price','total','discount','vat','payable','advance','due','deadline_date','collection','net_outstanding','delivery_date','inqueries_number','note','status'];

    function customer():BelongsTo{
        return $this->belongsTo(Customer::class);
    }

    function material():BelongsTo{
        return $this->belongsTo(Material::class);
    }
}
