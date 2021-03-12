<?php

namespace App\Http\Controllers;

use App\Porudzbina;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PorudzbinaController extends Controller
{

    public function store(Request $request)
    {
        $novaPorudzbina = Porudzbina::create([
            'ime' => $request->ime,
            'prezime' => $request->prezime,
            'adresa' => $request->adresa,
            'broj_telefona' => $request->broj_telefona,
            'grad' => $request->grad,
            'drzava' => $request->drzava,
        ]);
        $proizvodi = $request->input('proizvodi');
        foreach ($proizvodi as $proizvod) {

            $novaPorudzbina->odeca()->attach($proizvod["id"]);
        }
    }
}
