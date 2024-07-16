<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Banner;
use App\Models\Menu;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
    }
    public function show($id)
    {
        $product = Product::findOrFail($id);

        // dd($product);
        $menu = Menu::all();
        $banners = Banner::all();
        return Inertia::render('Product/Singlepage', [
            'menu' => $menu,
            'banners' => $banners,
            'product' => $product,

        ]);
    }
}
