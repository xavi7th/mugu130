<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class ActivationMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $token;
    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($token, $email)
    {
        $this->user = User::where('email', $email)->first();
        $this->token = $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      // dd($this->user);
        return $this->subject('Activation Mail')
                    ->view('emails.new_activation');
    }
}
