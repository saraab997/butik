<?php

use App\Porudzbina;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PorudzbinaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 20; $i++) {
            $random_odeca_id = rand(1, 10);

            $porudzbina = Porudzbina::create([
                'ime' => Str::random(rand(6, 20)),
                'prezime' => Str::random(rand(6, 20)),
                'broj_telefona' => '06' . rand(1000000, 9999999),
                'adresa' => Str::random(rand(6, 8)),
                'grad' => Str::random(rand(4, 13)),
                'drzava' => Str::random(rand(4, 9)),
            ]);
            $porudzbina->odeca()->attach([$random_odeca_id]);
        }
    }
}
