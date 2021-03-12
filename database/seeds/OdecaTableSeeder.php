<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OdecaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 10; $i++) {

            DB::table('odeca')->insert([
                'naziv' => Str::random(6) . " " . Str::random(4),
                'kategorija' => $this->kategorija()
            ]);
        }
    }

    private function kategorija()
    {
        $kategorija = rand(1, 6);
        switch ($kategorija) {
            case 1:
                return "JAKNA";
                break;
            case 2:
                return "DUKSERICA";
                break;
            case 3:
                return "MAJICA";
                break;
            case 4:
                return "TRENERKA";
                break;
            case 5:
                return "KAPA";
                break;
            default:
                return "SAL";
                break;
        }
    }
}
