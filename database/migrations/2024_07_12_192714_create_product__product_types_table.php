<?php

use App\Models\Products;
use App\Models\ProductType;
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
        Schema::create('product__product_types', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Products::class);
            $table->foreignIdFor(ProductType::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product__product_types');
    }
};
