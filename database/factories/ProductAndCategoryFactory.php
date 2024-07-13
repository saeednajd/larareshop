<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductCategory;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ProductAndCategory>
 */
class ProductAndCategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id'=>Product::factory(),
            'product_category_id'=>ProductCategory::factory(),
        ];
    }
}
