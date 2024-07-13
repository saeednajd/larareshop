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
            'gallery'=>json_encode([
                '1'=>fake()->imageUrl(640, 480, 'animals', true),
                '2'=>fake()->imageUrl(640, 480, 'animals', true),
            ]),
            'tags'=>json_encode([
                'tag','tag2','tag3','tag32','tag4',
            ])
        ];
    }
}
