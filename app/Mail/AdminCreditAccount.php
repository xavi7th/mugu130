<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class AdminCreditAccount extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $amt;
    public $username;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($amt, $username)
    {
        //
        $this->amt = $amt;
        $this->username = $username;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Admin Credit Account')
                    ->view('emails.admin_credit_account');
    }
}
