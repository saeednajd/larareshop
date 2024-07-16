<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProductFeature extends Model
{
    use HasFactory;
    public function product(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_and_product_features', 'product_id', 'product_feature_id');
    }
}
