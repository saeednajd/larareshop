<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'prTitle'=>fake()->title(),
            'prDescription'=>fake()->text($x=50),
            'prPrice'=>fake()->randomFloat(2, 1, 1000),
            'prImage'=>fake()->imageUrl(640, 480, 'animals', true),
            'offPrice'=>null,
            'gallery'=>'https://dkstatics-public.digikala.com/digikala-products/30b7b2495097fe53daf33aa2c0d5a3151c26c618_1712581746.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80|https://dkstatics-public.digikala.com/digikala-products/dac1b804e5f5df30672a6fd0fdcc9d87d064c8bd_1652810830.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            'tags'=>'tag1,game,beauty'
        ];
    }
}
