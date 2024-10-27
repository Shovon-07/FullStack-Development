<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name',   
    ];

       /**
     * Get the products for the category.
     */
    public function products()
    {
        return $this->hasMany(Product::class, 'cat_id');
    }
}
