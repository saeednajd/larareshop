<?php

namespace Database\Seeders;

use App\Models\Banner;
use App\Models\Menu;
use App\Models\ProductAndCategory;
use App\Models\ProductAndProductFeature;
use App\Models\ProductAndProductType;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        ProductAndCategory::factory(10)->create();
        ProductAndCategory::factory(10)->special()->create();
        ProductAndProductType::factory(10)->create();
        ProductAndProductFeature::factory(10)->create();
        Banner::factory(10)->topmenulocation()->create();
        Banner::factory(10)->create();
        $menuData = [
            [
                'name' => 'خانه',
                'link' => '/',
                'location' => 'topmenu',
            ],
            [
                'name' => 'محصولات',
                'link' => '/products',
                'location' => 'topmenu',
            ],
            [
                'name' => 'درباره ما',
                'link' => '/about',
                'location' => 'topmenu',
            ],
            [
                'name' => 'تماس با ما',
                'link' => '/contact',
                'location' => 'topmenu',
            ],[
                'name' => 'فروشگاه',
                'link' => '/shop',
                'location' => 'topmenu',
            ],
        ];
        Menu::factory()->times(count($menuData))->create($menuData);

       
    }
}
