<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Porudzbina extends Model
{
    protected $guarded = [];
    public $table = "porudzbina";

    public function odeca()
    {
        return $this->belongsToMany('App\Odeca');
    }
}
