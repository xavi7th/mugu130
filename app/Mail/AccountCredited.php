<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AccountCredited extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $amt;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($amt)
    {
        //
        $this->amt = $amt;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Account Credited')
                    ->view('emails.account_credited');
    }
}
