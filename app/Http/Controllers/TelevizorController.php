<?php

namespace App\Http\Controllers;

use App\Models\Televizor;

use App\Models\Firma;
use Illuminate\Http\Request;

class TelevizorController extends Controller
{
    public function ucitavanje()
    {
        $televizori = Televizor::all();

        return response()->json([
            'televizori' => $televizori
        ]);
    }

    public function izmena(Request $request, $id)
    {
        $rezolucija = $request->input('rezolucija');
        $velicina = $request->input('velicina');
        Televizor::where('id', $id)->update(['rezolucija' => $rezolucija, 'velicina' => $velicina]);
        return response()->json([
            'message' => true,
        ]);
    }

    public function dodavanje(Request $request)
    {
        $model = $request->input('model');
        $rezolucija = $request->input('rezolucija');
        $velicina = $request->input('velicina');
        $firma_id = $request->input('firma_id');

        Televizor::insert([
            'rezolucija' => $rezolucija,
            'model' => $model,
            'velicina' => $velicina,
            'firma_id' => $firma_id
        ]);
        Firma::find($firma_id)->increment('broj_televizora', 1);
        return response()->json([
            'message' => true,
        ]);
    }

    public function brisanje($id)
    {
        $firma = Televizor::find($id)->firma;
        if ($firma) {
            $firma->decrement('broj_televizora', 1);
        }
        Televizor::find($id)->delete();

        return response()->json([
            'message' => true,
        ]);
    }
}
