<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Odeca extends Model
{
    public $table = "odeca";

    public function porudzbine()
    {
        return $this->belongsToMany('App\Porudzbina');
    }
}
