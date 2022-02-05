<?php

namespace App\Http\Controllers;

use App\Models\Firma;
use Illuminate\Http\Request;

class FirmaController extends Controller
{
    public function ucitavanje()
    {
        $firme = Firma::all();

        return response()->json([
            'firme' => $firme
        ]);
    }

    public function televizori_firme($id)
    {
        $televizori = Firma::find($id)->televizori()->get();

        return response()->json([
            'televizori' => $televizori
        ]);
    }
}
