<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProductType extends Model
{
    use HasFactory;
    public function product(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_and_product_types', 'product_type_id', 'product_id');
    }
}
