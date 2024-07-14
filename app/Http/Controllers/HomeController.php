<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Menu;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index()
    {

        $menu = Menu::all();
        $banners = Banner::all();
        $products = Product::all();
        return Inertia::render('Home', [
            'menu' => $menu,
            'banners' => $banners,
            'products' => $products,
        ]);
    }
}
