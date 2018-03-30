<?php

namespace App\Listeners;

use App\Events\ExamJoined;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendNewExamineeJoinedNotification
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
     * @param  ExamJoined  $event
     * @return void
     */
    public function handle(ExamJoined $event)
    {
        //
        // dd($event->total_examinees);
        return $event->total_examinees;
    }
}
