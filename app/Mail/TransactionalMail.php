<?php

namespace App\Mail;

// use Postmark\PostmarkClient;
// use Postmark\Models\PostmarkException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\MessageBag;
use GuzzleHttp\Exception\ConnectException;
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

class TransactionalMail
{
  public static function sendVerificationMail($token, $email){

    Mail::to($email)->send(new ActivationMail($token));

  }

  public static function resendverificationMail(){

    // return (new PasswordResetMail(str_random(100)))->render();
    return (new VisitorMessage())->render();

    Mail::to( Auth::user()->email )->send(new ReactivationMail());

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

    return 'Sent: Check your email to verify your account.';//$sendResult->message ."";

  }

  public static function sendCreditMail($amt){

    return (new AccountCredited($amt))->render();

    Mail::to( Auth::user()->email )->send(new AccountCredited($amt));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function sendAdminCreditMail($amt, $username){

    return (new AdminCreditAccount($amt, $username))->render();

    Mail::to( Auth::user()->email )->send(new AdminCreditAccount($amt, $username));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function sendDebitRequestedMail($amt){

    return (new DebitRequested($amt))->render();

    Mail::to( Auth::user()->email )->send(new DebitRequested($amt));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function sendWithdrawalProcessedMail($amt){

    return (new WithdrawalProcessed($amt))->render();

    Mail::to( Auth::user()->email )->send(new WithdrawalProcessed($amt));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function passwordResetMail($user, $token){

    try {
      Mail::to($user->email)->send(new PasswordResetMail($user, $token));
    }
    catch (\Swift_TransportException $e) {
      // $errors = new MessageBag(['mail_error' => ['net_err'=>$e->getMessage() ]]);
      abort(404, str_limit($e->getMessage(), 52, '.'));
    }
    catch (Exception $e) {
      dd($e);
    }

  }

  public static function sendVisitorMessage(){
    // return _dd(request()->all());
    return [
      'status' => 200,
      'message' => (new VisitorMessage())->render()
    ];

    Mail::to( env('APP_EMAIL') )->replyTo(request()->input('details.email'))->send(new VisitorMessage());

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    } else {
      return [
        'status' => 200,
        'message' => 'Message sent'
      ];
    }

  }


}
