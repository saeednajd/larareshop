<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;
    public function payment(): HasOne
    {
        return $this->hasOne(Payment::class);
    }

    public function user():BelongsTo{
        return $this->belongsTo(User::class);
    }
}
