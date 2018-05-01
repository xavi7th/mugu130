<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class PasswordResetMail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $email;
    public $username;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $token)
    {
        //
        $this->token = $token;
        $this->email = $user->email;
        $this->username = $user->firstname . ' ' . $user->lastname;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Activation Mail')
                    ->view('emails.password_reset');
    }
}
