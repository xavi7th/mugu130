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
    public $trans_type;
    public $purpose;
    public $user_balance;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($amt, $trans_type, $user_balance, $username)
    {
        //
        $this->amt = $amt;
        $this->username = $username;
        $this->trans_type = $trans_type;
        $this->user_balance = $user_balance;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('no_reply@fastplay24.com', 'FastPlay24 Billing Team')
                    ->subject('Account Credited')
                    ->view('emails.admin_credit_account');
    }
}
