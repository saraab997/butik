<?php

namespace App\Http\Controllers;

use App\Odeca;
use Illuminate\Http\Request;

class OdecaController extends Controller
{
    public function index()
    {
        $odeca = Odeca::all();
        return response()->json([
            'odeca' => $odeca
        ]);
    }

    public function show(Request $request)
    {
        $proizvod = Odeca::find($request->id);
        return view('proizvod', [
            'proizvod' => $proizvod
        ]);
    }

    public function delete(Request $request)
    {
        Odeca::find($request->input('id'))->delete();
    }
}
