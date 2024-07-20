<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;
use App\Models\Product;
use App\Models\ProductCategory;
use Inertia\Inertia;


class ShopController extends Controller
{
    public function index(Request $request)
    {
        $sortby = $request->session()->get('sortby');

        $menu = Menu::all();
        $categories = ProductCategory::all();

        $query = Product::query();
        $products = $query->paginate(12);


        return Inertia::render('Product/Shop', [
            'menu' => $menu,
            'categories' => $categories,
            'products' => $products,
        ]);
    }
    public function show($sortby)
    {

        //متفرقه
        $menu = Menu::all();
        $categories = ProductCategory::all();
        //محصولات
        $query = Product::query();
        switch ($sortby) {
            case 'mostRecent':
                $query->orderBy('created_at', 'desc');
                break;
            case 'oldest':
                $query->orderBy('created_at', 'asc');
                break;
            case 'cheapest':
                $query->orderBy('prOneToFivePrice', 'asc');
                break;
            case 'mostExpensive':
                $query->orderBy('prOneToFivePrice', 'desc');
                break;
            default:
                // در صورت عدم تطابق با هر کدام از مقادیر، می‌توانید مرتب‌سازی پیش‌فرض را اعمال کنید.
                $query->orderBy('created_at', 'desc');
                break;
        }
        $products = $query->paginate(12);


        return Inertia::render('Product/Shop', [
            'menu' => $menu,
            'categories' => $categories,
            'products' => $products,
        ]);
    }
}
