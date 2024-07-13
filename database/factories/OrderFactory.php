<?php


namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'items' => json_encode([
                'key1' => fake()->word(),
                'key2' => fake()->numberBetween(1, 100),
                'key3' => fake()->sentence()
            ]),
            'paymentStatus' => fake()->randomElement(['pending', 'successful', 'unsuccessful']),
            'shippingStatus' => fake()->randomElement(['pending', 'posted', 'canceled']),
            'address' => fake()->address(),
            'phoneNumber' => fake()->phoneNumber(),
            'postCode' => fake()->postcode(),
            'customerNote' => fake()->text(),
            'trackingCode' =>  strval(fake()->numberBetween(433540311601363890003100, 433540311601363890003999)),
            'finalAmount' => (string) fake()->numberBetween(50000, 20000),

        ];
    }
}
