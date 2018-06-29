<?php

// return new HasManyEmpty($this->newRelatedInstance(UserGameSession::class)->newQuery(), $this, '', '');;

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;

class HasManyEmpty extends HasMany
{
    public function getResults()
    {
        // return Collection::make();
        return null;
    }

    public function get($columns = ['*'])
    {
        // return Collection::make();
        return null;

    }
}
