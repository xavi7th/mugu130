<?php

namespace App\Listeners;

use App\Events\NewMemberJoined;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewMemberJoinedNotification
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  NewMemberJoined  $event
     * @return void
     */
    public function handle(NewMemberJoined $event)
    {
        //
        return $event->new_session;

    }
}
