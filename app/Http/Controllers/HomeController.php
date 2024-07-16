<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Menu;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {
        $specialcategory = ProductCategory::where('title', 'special')->get();

        $query = Product::query();
        $test = $query->paginate(10);

        $productsArray = array();

        foreach ($specialcategory as $category) {
            $productsArray = array_merge($productsArray, $category->product->toArray());
        }

        $menu = Menu::all();
        $banners = Banner::all();
        $products = Product::all();
        $site_setting = SiteSetting::where('active', true)->first();
        return Inertia::render('Home', [
            'menu' => $menu,
            'banners' => $banners,
            'products' => $products,
            'specialproducts' => $productsArray,
            'site_setting' => $site_setting,
        ]);
    }
}
