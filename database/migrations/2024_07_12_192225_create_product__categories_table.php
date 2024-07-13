<?php

use App\Models\Product_Category;
use App\Models\Products;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product__categories', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Products::class);
            $table->foreignIdFor(Product_Category::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product__categories');
    }
};
