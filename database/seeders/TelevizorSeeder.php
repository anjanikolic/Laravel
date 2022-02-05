<?php

namespace Database\Seeders;


use App\Models\Firma;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class TelevizorSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 40; $i++) {
            $firma_id = rand(1, 7);
            DB::table('televizor')->insert([
                'model' => Str::random(5),
                'velicina' => rand(3, 13) . 'inch',
                'rezolucija' => rand(80, 200) ,
                'firma_id' => $firma_id
            ]);
            Firma::find($firma_id)->increment('broj_televizora', 1);
        }
    }
}
