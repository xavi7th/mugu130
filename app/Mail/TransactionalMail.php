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

  public function withoutTemplate($data = null){

    try{
        $client = new PostmarkClient("<server token>");
      	$sendResult = $client->sendEmail("<sender signature>",
      		"ben@example.com",
      		"Hello from Postmark!",
      		"This is just a friendly 'hello' from your friends at Postmark.");

      }catch(PostmarkException $ex){
      	// If client is able to communicate with the API in a timely fashion,
      	// but the message data is invalid, or there's a server error,
      	// a PostmarkException can be thrown.
      	echo $ex->httpStatusCode;
      	echo $ex->message;
      	echo $ex->postmarkApiErrorCode;

      }catch(Exception $generalException){
      	// A general exception is thrown if the API
      	// was unreachable or times out.
      }

  }

  public function withTemplate($data = null){

        //Send them a mail containing their session id so that they can use it to track their orders or make complaints later
        try{
          $client = new PostmarkClient("606566d3-dad8-498f-85f6-04a0c7d3275e");
          // $client = new PostmarkClient("af00e349-175b-4b53-b729-36e83b599ce3");

          // Make a request
          $sendResult = $client->sendEmailWithTemplate(
            "sales@theelects.com",
            // "support@bitensured.com",
            session()->get('address')->email,
            1559341,
            [	"username" => session()->get('address')->username,
              "images" => $imagearray,
              "transid" => session()->get('transid'),
              "totalprice" => $carttotal,
            ]
          );

          // echo $sendResult->message ."\r\n";

        }

        catch(PostmarkException $ex){
            // If client is able to communicate with the API in a timely fashion,
            // but the message data is invalid, or there's a server error,
            // a PostmarkException can be thrown.
            echo $ex->httpStatusCode .'<br>';
            echo $ex->message . PHP_EOL;
            echo $ex->postmarkApiErrorCode;
        }
        catch(Exception $generalException){
          // A general exception is thrown if the API
          // was unreachable or times out.
        }
  }

  public static function postmarkPasswordResetMail($user, $token){

    //Send them a mail containing their session id so that they can use it to track their orders or make complaints later
    # code...
    // dump($token);
    // exit;
    //Send them a mail containing their password reset link
    try{
      $client = new \Postmark\PostmarkClient(env('POSTMARK_KEY'));

      // Make a request
      $sendResult = $client->sendEmailWithTemplate(
        "support@bitensured.com",
        // 'xavi7th@gmail.com',
        $user->email,
        5299401,
        [
          "name" => $user->firstname . ' '. $user->lastname,
          "action_url" => url(route('password.reset', $token)),
          "product_name" => env('APP_NAME'),
          "headerBackground" => asset('img/5.jpg'),
          "product_url" => route('home'),
          "support_url" => url('/contact'),
          "sitelogo" => asset('img/logo.png'),
          "company_name" => env('APP_NAME'),
          "company_address" => env('APP_ADDRESS')
        ]
      );

      // echo $sendResult->message ."\r\n";
      // return $sendResult;
      return $sendResult->message;

    }
    catch(\Postmark\Models\PostmarkException $ex){
      return [
                  'status' => $ex->httpStatusCode,
                  'message' => $ex->message . PHP_EOL . $ex->postmarkApiErrorCode
                ];
    }
    catch(\GuzzleHttp\Exception\ConnectException $ex){
      abort(404, $ex->getMessage());
    }
    catch(Exception $generalException){
      return [
                'status' => 422,
                'message' => 'The mail server is currently unreachable. Try again later'
              ];
    }
  }

  public static function phpmailerResendverificationMail(){

    // https://github.com/PHPMailer/PHPMailer/blob/master/examples/smtp.phps See this link

    /**
    * This example shows making an SMTP connection with authentication.
    */

    require '../PHPMailerAutoload.php';

    //Create a new PHPMailer instance
    $mail = new PHPMailer;
    //Tell PHPMailer to use SMTP
    $mail->isSMTP();
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 2;
    //Ask for HTML-friendly debug output
    $mail->Debugoutput = 'html';
    //Set the hostname of the mail server
    $mail->Host = "mail.example.com";
    //Set the SMTP port number - likely to be 25, 465 or 587
    $mail->Port = 25;
    //Whether to use SMTP authentication
    $mail->SMTPAuth = true;
    //Username to use for SMTP authentication
    $mail->Username = "yourname@example.com";
    //Password to use for SMTP authentication
    $mail->Password = "yourpassword";
    //Set who the message is to be sent from
    $mail->setFrom('from@example.com', 'First Last');
    //Set an alternative reply-to address
    $mail->addReplyTo('replyto@example.com', 'First Last');
    //Set who the message is to be sent to
    $mail->addAddress('whoto@example.com', 'John Doe');
    //Set the subject line
    $mail->Subject = 'PHPMailer SMTP test';
    //Read an HTML message body from an external file, convert referenced images to embedded,
    //convert HTML into a basic plain-text alternative body
    $mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
    //Replace the plain text body with one created manually
    $mail->AltBody = 'This is a plain-text message body';
    //Attach an image file
    $mail->addAttachment('images/phpmailer_mini.png');

    //send the message, check for errors
    if (!$mail->send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
    } else {
      echo "Message sent!";
    }


  }


    public static function postmarkSendVerificationMail($token){
        //  var_dump( request()->input('details') ); exit;
          //Send them a mail containing their session id so that they can use it to track their orders or make complaints later
          try{
            $client = new PostmarkClient(env('POSTMARK_KEY'));

            // Make a request
            $sendResult = $client->sendEmailWithTemplate(
              "support@bitensured.com",
              request()->input('details.email'),
              5291681,
              [
                "name" => request()->input('details.firstname') . ' ' . request()->input('details.lastname'),
                "action_url" => $token,
                "login_url" => route('login'),
                "username" => request()->input('details.email'),
                "sitelogo" => asset('img/logo.png'),
                "product_name" => env('APP_NAME'),
                "company_name" => env('APP_NAME'),
                "company_address" => env('APP_ADDRESS'),
                "product_url" => route('home'),
                "headerBackground" => asset('img/testimonial-bg.jpg'),
              ]
            );
            return $sendResult->message ."\r\n";

          }
          catch(ConnectException $err){
            // abort(401, 'Error in network connection.');
            return [
              'status' => $err->getCode(),
              'message' => 'There was a connection error'
            ];

          }
          catch(PostmarkException $ex){
              // If client is able to communicate with the API in a timely fashion,
              // but the message data is invalid, or there's a server error,
              // a PostmarkException can be thrown.
              return [
                'status' => $ex->httpStatusCode,
                'message' => $ex->message . PHP_EOL . $ex->postmarkApiErrorCode
              ];
          }
          catch(Exception $generalException){
            // A general exception is thrown if the API
            // was unreachable or times out.
            return [
              'status' => 422,
              'message' => 'The mail server is currently unreachable. Try again later'
            ];
          }

    }

  public static function postmartResendverificationMail(){

      //  var_dump( request()->input('details') ); exit;
        //Send them a mail containing their session id so that they can use it to track their orders or make complaints later
        try{
          $client = new PostmarkClient(env('POSTMARK_KEY'));

          // Make a request
          $sendResult = $client->sendEmailWithTemplate(
            env('APP_EMAIL'),
            'xavi7th@gmail.com',
            // Auth::user()->email,/
            5291681,
            [
              "name" => Auth::user()->firstname . ' ' . Auth::user()->lastname,
              "action_url" => route('verify.check', ['token' => Auth::user()->confirmation_token] ),
              "login_url" => route('login'),
              "username" => Auth::user()->email,
              "sitelogo" => asset('img/logo.png'),
              "product_name" => env('APP_NAME'),
              "company_name" => env('APP_NAME'),
              "company_address" => env('APP_ADDRESS'),
              "product_url" => route('home'),
              "headerBackground" => asset('img/testimonial-bg.jpg'),
            ]
          );

          return 'Sent: Check your email to verify your account.';//$sendResult->message ."";

        }
        catch(ConnectException $err){
          // abort(401, 'Error in network connection.');
          return [
            'status' => 408,
            'message' => 'There was a connection error'
          ];

        }
        catch(PostmarkException $ex){
            // If client is able to communicate with the API in a timely fashion,
            // but the message data is invalid, or there's a server error,
            // a PostmarkException can be thrown.
            return [
              'status' => $ex->httpStatusCode,
              'message' => $ex->message . PHP_EOL . $ex->postmarkApiErrorCode
            ];
        }
        catch(Exception $generalException){
          // A general exception is thrown if the API
          // was unreachable or times out.
          return [
            'status' => 422,
            'message' => 'The mail server is currently unreachable. Try again later'
          ];
        }
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

  public static function sendVerificationMail($token, $email){

    Mail::to($email)->send(new ActivationMail($token));

  }


}
