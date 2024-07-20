<?php

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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('prTitle');
            //price
            $table->string('prBuyPrice');
            $table->string('prOneToFivePrice');
            $table->string('prFiveToTenPrice');
            $table->string('prTenToUnlmitePrice');
            $table->string('offPrice');
            
            //description
            $table->text('shortDescription')->nullable();
            $table->text('prDescription')->nullable();
            //images
            $table->string('prImage');
            $table->text('gallery')->nullable();
            //ETC
            $table->boolean('idOrginal')->default(true);
            $table->string('inventory');
            $table->string('madeInCountry')->nullable();
            $table->text('tags')->nullable();


            //DigiKala
            $table->string('dKPC')->nullable();
            $table->string('dkPrice')->nullable();
            $table->boolean('autoPriceUpdate')->default(false);
            $table->boolean('autoInventoryUpdate')->default(false);

            //Controllers
            $table->boolean('isActive')->default(true);
            $table->boolean('isDelete')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
