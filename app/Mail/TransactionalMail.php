<?php

namespace App\Mail;

// use Postmark\PostmarkClient;
// use Postmark\Models\PostmarkException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\MessageBag;
use GuzzleHttp\Exception\ConnectException;
use App\User;
use App\Mail\WelcomeMail;
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\Exception;
use Aws\Ses\SesClient;
use Aws\Exception\AwsException;

class TransactionalMail
{
	public static function sendVerificationMail($token, $email)
	{

    // try {
    //   Mail::to($email)->send(new ActivationMail($token, $email));
    // }
		$html_body = (new ActivationMail($token, $email))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Activation Mail";
		$sender_email = 'FastPlay24 Buddies <no_reply@fastplay24.com>';
		$recipient = [$email['email']];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
      // $errors = new MessageBag(['mail_error' => ['net_err'=>$e->getMessage() ]]);
			abort(404, 'Activation mail not sent. ' . str_limit($e->getMessage(), 52, '.') . ' Go back to home page and login with your details');
		} catch (\Exception $e) {
			abort(404, 'Something went wrong while attempting to send you an email.');
        // dd($e);
		}
	}

	public static function resendverificationMail()
	{

    // return (new PasswordResetMail(str_random(100)))->render();
    // return (new ReactivationMail())->render();

		try {
			Mail::to(Auth::user()->email)->send(new ReactivationMail());
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}


		if (count(Mail::failures()) > 0) {
			return [
				'status' => 422,
				'message' => 'Error sending mail'
			];
		}

		return 'Sent: Check your email to verify your account.';//$sendResult->message ."";

	}

	public static function sendWelcomeMail($firstname, $email)
	{

    // return (new WelcomeMail($firstname))->render();

    // try {
    //   Mail::to($email)->send(new WelcomeMail($firstname));
    // }
		$html_body = (new WelcomeMail($firstname))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Welcome to FastPlay24";
		$sender_email = 'FastPlay24 Buddies <no_reply@fastplay24.com>';
		$recipient = [$email];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}

	}

	public static function sendCreditMail($amt, $fees, $trans_type, $user_balance)
	{

    // return (new AccountCredited($amt, $trans_type, $user_balance))->render();

    // try {
    //   Mail::to( Auth::user()->email )->send(new AccountCredited($amt, $fees, $trans_type, $user_balance));
    // }
		$html_body = (new AccountCredited($amt, $fees, $trans_type, $user_balance))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Account Credited";
		$sender_email = 'FastPlay24 Billing Team <no_reply@fastplay24.com>';
		$recipient = [Auth::user()->email];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}


		if (count(Mail::failures()) > 0) {
			return [
				'status' => 422,
				'message' => 'Error sending mail'
			];
		}

	}

	public static function sendAdminCreditMail($amt, $trans_type, $user_balance, $username, $email)
	{

    // return (new AdminCreditAccount($amt, $trans_type, $user_balance, $username))->render();

    // try {
    //   Mail::to( $email )->send(new AdminCreditAccount($amt, $trans_type, $user_balance, $username));
    // }
		$html_body = (new AdminCreditAccount($amt, $trans_type, $user_balance, $username))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Account Credited";
		$sender_email = 'FastPlay24 Billing Team <no_reply@fastplay24.com>';
		$recipient = [$email];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}


		if (count(Mail::failures()) > 0) {
			return [
				'status' => 422,
				'message' => 'Error sending mail'
			];
		}

	}

	public static function sendDebitRequestedMail($amt)
	{

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






	public static function sendWithdrawalProcessedMail($user, $amt, $trans_type, $charge, $total)
	{

    // return (new WithdrawalProcessed($user, $amt, $trans_type, $charge, $total))->render();

    // try {
    //   Mail::to( $user->email )->send(new WithdrawalProcessed($user, $amt, $trans_type, $charge, $total));
    // }
		$html_body = (new WithdrawalProcessed($user, $amt, $trans_type, $charge, $total))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Withdrawal Processed";
		$sender_email = 'FastPlay24 Billing Team <no_reply@fastplay24.com>';
		$recipient = [$user->email];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}


		if (count(Mail::failures()) > 0) {
			return [
				'status' => 422,
				'message' => 'Error sending mail'
			];
		}

	}

	public static function passwordResetMail($user, $token)
	{

    // return (new PasswordResetMail($user, $token))->render();

    // try {
    //   Mail::to($user->email)->send(new PasswordResetMail($user, $token));
    // }
		$html_body = (new PasswordResetMail($user, $token))->render();
		$SesClient = new SesClient([
			'version' => 'latest',
			'region' => 'us-east-1',
			'credentials' => array(
				'key' => env('AMAZON_SES_KEY'),
				'secret' => env('AMAZON_SES_SECRET')
			),
			'http' => [
				'verify' => false
			]
		]);
		$char_set = 'UTF-8';
		$subject = "Password Reset Request";
		$sender_email = 'FastPlay24 Buddies <no_reply@fastplay24.com>';
		$recipient = [$user->email];
		try {
			$result = $SesClient->sendEmail([
				'Destination' => [
					'ToAddresses' => $recipient,
				],
				'ReplyToAddresses' => [$sender_email],
				'Source' => $sender_email,
				'Message' => [
					'Body' => [
						'Html' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
						'Text' => [
							'Charset' => $char_set,
							'Data' => $html_body,
						],
					],
					'Subject' => [
						'Charset' => $char_set,
						'Data' => $subject,
					],
				],
			]);
		} catch (AwsException $e) {
			echo $e->getMessage();
			echo ("The email was not sent. Error message: " . $e->getAwsErrorMessage() . "\n");
		} catch (\Swift_TransportException $e) {
      // $errors = new MessageBag(['mail_error' => ['net_err'=>$e->getMessage() ]]);
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}

	}

	public static function sendVisitorMessage()
	{
    // return _dd(request()->all());
    // return (new VisitorMessage())->render();

    // return [
    //   'status' => 200,
    //   'message' => (new VisitorMessage())->render()
    // ];

		try {
			Mail::to(env('APP_EMAIL'))->send(new VisitorMessage());
		} catch (\Swift_TransportException $e) {
			abort(404, str_limit($e->getMessage(), 52, '.'));
		} catch (Exception $e) {
			dd($e);
		}


		if (count(Mail::failures()) > 0) {
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
