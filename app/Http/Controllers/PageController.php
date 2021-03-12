<?php

namespace App\Http\Controllers;

use App\Odeca;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }
    public function formaZaPorudzbinu(Request $request)
    {
        $ids = $request->query('id');
        $proizvodi = Odeca::findMany($ids);

        return view('formaZaPorudzbinu', [
            'proizvodi' => $proizvodi
        ]);
    }
}
