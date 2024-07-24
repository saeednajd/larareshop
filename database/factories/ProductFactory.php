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

            'prTitle' => fake()->sentence($nbWords = fake()->numberBetween(3, 8), $variableNbWords = false, $asText = true),

            //price
            'prBuyPrice' => fake()->numberBetween(1, 1000),
            'prOneToFivePrice' => fake()->numberBetween(5000, 6000),
            'prFiveToTenPrice' => fake()->numberBetween(4500, 5000),
            'prTenToUnlmitePrice' => fake()->numberBetween(4000, 4500),
            'offPrice' => fake()->numberBetween(4500, 5000),
            //description
            'shortDescription' => fake()->sentence(20),
            'prDescription' => fake()->sentence(70),
            //images
            'prImage' => fake()->imageUrl(640, 480, 'animals', true),
            'gallery' => 'https://dkstatics-public.digikala.com/digikala-products/30b7b2495097fe53daf33aa2c0d5a3151c26c618_1712581746.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80|https://dkstatics-public.digikala.com/digikala-products/dac1b804e5f5df30672a6fd0fdcc9d87d064c8bd_1652810830.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            //ETC
            'idOrginal' => fake()->randomElement([true, false]),
            'inventory' => fake()->numberBetween(0, 100),
            'madeInCountry' => fake()->country(),
            'tags' => 'tag1,game,beauty',

            //Controllers
            'isActive' => fake()->randomElement([true, false]),
            'isDelete' => fake()->randomElement([true, false]),

        ];
    }
}
