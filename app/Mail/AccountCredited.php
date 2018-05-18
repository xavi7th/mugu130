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
    public $trans_type;
    public $purpose;
    public $user_balance;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($amt, $trans_type, $purpose, $user_balance)
    {
        $this->amt = $amt;
        $this->trans_type = $trans_type;
        $this->purpose = $purpose;
        $this->user_balance = $user_balance;
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
