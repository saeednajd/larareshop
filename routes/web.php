<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('Home');

//product 


Route::get('/shop', function () {
    return redirect()->route('product');
})->name('shop');

Route::get('/shop/{sortby}', function ($sortby) {
    return redirect()->route('product')->with('sortby', $sortby);
})->name('shop.sortby');

Route::get('/product', [ProductController::class, 'index'])->name('product');

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
