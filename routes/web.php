<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'PageController@welcome');
Route::get('/formaZaPorudzbinu', 'PageController@formaZaPorudzbinu');
Route::get('/odeca/get', 'OdecaController@index');
Route::get('/odeca/getByID', 'OdecaController@show');

Route::post('/porudzbina/post', 'PorudzbinaController@store');
Route::delete('/odeca/delete', 'OdecaController@delete');
