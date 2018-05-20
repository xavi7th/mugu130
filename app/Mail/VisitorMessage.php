<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class VisitorMessage extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $email;
    public $sbj;
    public $msg;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->email = request()->input('details.email');
        $this->sbj = request()->input('details.subject');
        $this->msg = request()->input('details.message');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Fastplay24 Visitor Mail')
                    ->view('emails.visitor_message')
                    ->replyTo($this->email);
    }
}
