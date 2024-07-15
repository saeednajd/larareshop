<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Menu;
use App\Models\Product;
use App\Models\ProductCategory;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {
        $specialcategory = ProductCategory::where('title', 'special')->get();


        $productsArray = array();

        foreach ($specialcategory as $category) {
            $productsArray = array_merge($productsArray, $category->product->toArray());
        }

        $menu = Menu::all();
        $banners = Banner::all();
        $products = Product::all();
        return Inertia::render('Home', [
            'menu' => $menu,
            'banners' => $banners,
            'products' => $products,
            'specialproducts' => $productsArray,
        ]);
    }
}
