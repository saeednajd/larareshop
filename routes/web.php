<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('Home');

//shop 
Route::get('/shop', [ShopController::class, 'index'])->name('shop');
Route::get('/shop/{orderby}', [ShopController::class, 'show'])->name('shop.orderby');
//checkout
Route::get('/checkout', function () {
    return Inertia::render('Checkout');
})->name('checkout');
//cart
Route::get('/cart', [CartController::class, 'index'])->name('cart');
//product
Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
