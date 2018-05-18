<?php

namespace App\Mail;

// use Postmark\PostmarkClient;
// use Postmark\Models\PostmarkException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\MessageBag;
use GuzzleHttp\Exception\ConnectException;
use App\User;
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;

class TransactionalMail
{
  public static function sendVerificationMail($token, $email){

    return (new ActivationMail($token))->render($token);

    Mail::to($email)->send(new ActivationMail($token));

  }

  public static function resendverificationMail(){

    // return (new PasswordResetMail(str_random(100)))->render();
    return (new ReactivationMail())->render();

    Mail::to( Auth::user()->email )->send(new ReactivationMail());

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

    return 'Sent: Check your email to verify your account.';//$sendResult->message ."";

  }

  public static function sendCreditMail($amt, $trans_type, $user_balance){

    return (new AccountCredited($amt, $trans_type, null, $user_balance))->render();

    Mail::to( Auth::user()->email )->send(new AccountCredited($amt, $trans_type, null, $user_balance));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function sendAdminCreditMail($amt, $trans_type, $purpose, $user_balance, $username){

    return (new AdminCreditAccount($amt, $trans_type, $purpose, $user_balance, $username))->render();

    Mail::to( Auth::user()->email )->send(new AdminCreditAccount($amt, $trans_type, $purpose, $user_balance, $username));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function sendDebitRequestedMail($amt){

    // return (new DebitRequested($amt))->render();
    //
    // Mail::to( Auth::user()->email )->send(new DebitRequested($amt));
    //
    // if ( count(Mail::failures()) > 0) {
    //   return [
    //     'status' => 422,
    //     'message' => 'Error sending mail'
    //   ];
    // }

  }






  public static function sendWithdrawalProcessedMail(User $user, $amt, $trans_type, $charge, $total ){

    return (new WithdrawalProcessed($user, $amt, $trans_type, $charge, $total))->render();

    Mail::to( $user->email )->send(new WithdrawalProcessed($user, $amt, $trans_type, $charge, $total));

    if ( count(Mail::failures()) > 0) {
      return [
        'status' => 422,
        'message' => 'Error sending mail'
      ];
    }

  }

  public static function passwordResetMail($user, $token){

    return (new PasswordResetMail($user, $token))->render();

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
    return (new VisitorMessage())->render();

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
