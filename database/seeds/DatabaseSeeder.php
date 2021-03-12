<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(OdecaTableSeeder::class);
        $this->call(PorudzbinaTableSeeder::class);
    }
}
