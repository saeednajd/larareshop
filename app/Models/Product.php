<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    public function productCategory(): BelongsToMany
    {
        return $this->belongsToMany(ProductCategory::class, 'product_and_categories', 'product_id', 'product_category_id');
    }

    public function productfeature(): BelongsToMany
    {

        return $this->belongsToMany(ProductFeature::class, 'product_and_product_features', 'product_id', 'product_feature_id');
    }
    public function producttype()
    {
        return $this->belongsToMany(ProductType::class, 'product_and_product_types', 'product_id', 'product_type_id');
    }
}
