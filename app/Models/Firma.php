<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Firma extends Model
{
    //use HasFactory;
    protected $table = "firma";
    public $timestamps = false;

    public function televizori()
    {
        return $this->hasMany(Televizor::class);
    }
    public function drzava()
    {
        return $this->belongsTo(Drzava::class);
    }
}
