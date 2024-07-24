<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function index()
    {

        $menu = Menu::all();


        return Inertia::render('Checkout', [
            'menu' => $menu,
        ]);
    }
    

}
