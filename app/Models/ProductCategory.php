<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ProductCategory extends Model
{
    use HasFactory;
    public function product(): BelongsToMany
    {
        return $this->belongsToMany(Product::class, 'product_and_categories', 'product_category_id', 'product_id');
    }
}
