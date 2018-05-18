<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class WithdrawalProcessed extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $amt;
    public $user;
    public $trans_type;
    public $charge;
    public $total;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $amt, $trans_type, $charge, $total)
    {
        $this->amt = $amt;
        $this->user = $user;
        $this->trans_type = $trans_type;
        $this->charge = $charge;
        $this->total = $total;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Withdrawal Processed')
                    ->view('emails.withdrawal_processed');
    }
}
