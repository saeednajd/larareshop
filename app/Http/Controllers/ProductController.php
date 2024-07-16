<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
    }
    public function show($id)
    {
        return Inertia::render('Product/Singlepage',['']);
    }
}
