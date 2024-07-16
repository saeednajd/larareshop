<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Banner>
 */
class BannerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>fake()->title(),
            'imageurl'=>fake()->imageUrl(),
            'link'=>'#',
            'location'=>fake()->randomElement(['topmenu','middle'])
        ];
    }

    public function topmenulocation(): static
    {
        return $this->state(fn (array $attributes) => [
            'location' => 'topmenu',
        ]);
    }
    
}
