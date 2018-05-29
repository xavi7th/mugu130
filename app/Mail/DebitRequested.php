<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class DebitRequested extends Mailable implements ShouldQueue
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
        return $this->from('no_reply@fastplay24.com', 'FastPlay24 Billing Team')
                    ->subject('Withdrawal Request')
                    ->view('emails.debit_requested');
    }
}
