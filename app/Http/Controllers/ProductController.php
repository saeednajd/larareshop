<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Banner;
use App\Models\Menu;
use App\Models\Product;
use App\Models\ProductCategory;

use function PHPUnit\Framework\isEmpty;
use function PHPUnit\Framework\isNull;

class ProductController extends Controller
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
    public function show($id)
    {


        $testrelation = Product::with('productCategory')->get();

        $categoryTitle = 'special';

        // پیدا کردن محصول با دسته‌بندی مشخص
        // $product = Product::where('id', $productId)
        //     ->whereHas('productCategory', function ($query) use ($categoryTitle) {
        //         $query->where('title', $categoryTitle);
        //     })
        //     ->first();

        $producttype = Product::with('producttype')
            ->whereHas('producttype')
            ->where('id', $id)
            ->get();

        if ($producttype->isEmpty()) {
            $producttype = Product::where('id', $id)->get();
        }

        $productFeatures = Product::with('productfeature')
            ->whereHas('productfeature')
            ->where('id', $id)
            ->get();


        $productwithcategory = Product::with('productCategory')
            ->whereHas('productCategory')
            ->where('id', $id)
            ->get();
        if ($productFeatures->isEmpty()) {
            $productFeatures = Product::where('id', $id)->get();
        }


        if ($productwithcategory->isEmpty()) {
            // محصول دارای دسته‌بندی نیست
            $productwithcategory = Product::where('id', $id)->get();
        }
        $menu = Menu::all();
        $banners = Banner::all();
        return Inertia::render('Product/Singlepage', [
            'menu' => $menu,
            'banners' => $banners,
            'productwithcategory' => $productwithcategory,
            'producwithttype' => $producttype

        ]);
    }
}
