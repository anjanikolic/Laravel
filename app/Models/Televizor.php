<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Televizor extends Model
{
    //use HasFactory;
    protected $table = "televizor";
    public $timestamps = false;

    public function firma()
    {
        return $this->belongsTo(Firma::class);
    }
}
