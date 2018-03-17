<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use App\Http\Middleware\TrimStrings;
use App\Slide;
use App\Package;
use Carbon\Carbon;


//
// Route::middleware(['auth:api', 'suspend'])->group(function () {
//
//     Route::post('/get-dashboard-details', function () {
//       // return $request->user()->with('notices')->first();
//
//         // return Auth::guard('api')->user()->with('notices')->get();
//         return response()->json([
//                 Auth::guard('api')->user()->load('notices'),
//                 'messages' => Auth::guard('api')->user()->messages,
//                 'ghtimeleft' => Auth::guard('api')->user()->ghtimeleft(),
//                 'notification' => Message::where('sender_id', 40000)->latest()->first()
//         ], 200);
//     });

    Route::post('/upload-image', function () {
          // dump(request()->all());

          $data = request('image');
          $foldername = request('fn');

          list($type, $data) = explode(';', $data);
          list(, $data)      = explode(',', $data);

          $data = base64_decode($data);
          $imageName = time().'.png';
          $hey = Storage::disk('public')->put($foldername.$imageName, $data);

          return ['filename' => '/storage/'.$foldername.$imageName];


    });
//
//     Route::post('/get-profile-page-details', function () {
//
//         return Auth::guard('api')->user()->load('notices');
//     });
//
//     Route::post('/update-user-details', function (Request $req) {
//       // return  $req->details['phone2'];
//         Cache::flush();
//         return ['status' => $req->user()->update([
//                                   'firstname' => $req->details['firstname'],
//                                   'lastname' => $req->details['lastname'],
//                                   'img' => $req->details['img'],
//                                   'phone' => $req->details['phone'],
//                                   'phone2' => $req->details['phone2'],
//                                   'email' => $req->details['email'],
//                                   'username' => $req->details['username'],
//                                   'accnum' => $req->details['accnum'],
//                                   'accbank' => $req->details['accbank'],
//                                   'accname' => $req->details['accname'],
//                                   'acctype' => $req->details['acctype'],
//                               ])];
//     });
//
//     Route::post('/get-ph-page-details', function (Request $req) {
//         return $req->user()->only(['tracker', 'phamt', 'accname', 'accnum', 'accbank', 'acctype', 'img']);
//     });
//
//     Route::post('/make-ph-request', function (Request $req) {
//
//         $rules = [
//           'details.amt' => 'required|numeric',
//           'details.acc' => 'required|accepted',
//         ];
//
//         $validator = Validator::make($req->all(), $rules);
//
//   			if($validator->fails()){
//           if ($req->json()) {
//             # code...
//             return response()->json([
//                 $validator->messages()
//             ], 409);
//           }
//   			}
//
//         if ( $req->user()->phamt > $req->input('details.amt') ){
//           return response()->json([
//               ['error' => 'Cannot make a PH less than your previous PH of ₦' . $req->user()->phamt]
//           ], 409);
//         }
//
//         if ($req->input('details.amt') < 10000){
//           return response()->json([
//               ['error' => 'The minimum amount accepted is ₦10,000']
//           ], 409);
//         }
//
//   			// Check if the bank account details are filled
//   			if(empty($req->user()->accname) || empty($req->user()->accnum) || empty($req->user()->acctype) || empty($req->user()->accbank)) {
//           return response()->json([
//               ['error' => 'Update account details from your profile page.']
//           ], 409);
//   			}
//
//   			// Check if this is an admin acc
//   			if( $req->user()->useraccstatus == 'admin') {
//           return response()->json([
//               ['error' => 'Admin account cannot participate in donations']
//           ], 409);
//   			}
//
//   			$phamt = $req->input('details.amt');
//
//   			DB::beginTransaction();
//
//             $expectedgh = $phamt * 1.2;
//
//       			//Update the user's tracker
//     				$req->user()->phamt = $phamt;
//     				$req->user()->phbalance = $phamt;
//     				$req->user()->phgiven = 0;
//     				$req->user()->phdate = Carbon::now()->toDateTimeString();
//     				$req->user()->expectedgh = DB::raw('expectedgh + '.$expectedgh);
//     				$req->user()->expectedghdate = Carbon::now()->addDays(7)->toDateTimeString();
//             $req->user()->tracker = 'match pending';
//             $req->user()->save();
//
//       			// create a notice for him to see on his dashboard
//             Notice::phSuccess();
//
//             //  dump(Auth::user()->getattributes()); exit;
//   			DB::commit();
//
//         Cache::flush();
//
//   			//Redirect him back to dashboard
//         return response()->json([
//               'success' => true,
//         ], 200);
//
//
//     });
//
//     Route::post('/get-gh-page-details', function (Request $req) {
//         return $req->user()->only(['tracker', 'phamt', 'expectedgh', 'ghbalance', 'amtreceived', 'amtwithdrawable']);
//     });
//
//     Route::post('/make-gh-request', function (Request $req) {
//
//         if (!$req->user()->dueforOriginalAmountGH()) {
//           return response()->json([
//               ['error' => 'Account not due for donation request']
//           ], 409);
//         }
//
//         elseif ($req->user()->requestedHelp()) {
//           return response()->json([
//               ['error' => 'Our records show that you already requested for help. If this is in error, <a class="text-warning text-bold text-uppercase" href="'. route('contact') .'">Contact Admin</a>. If it is true, then just relax, we are already working on your GH']
//           ], 409);
//         }
//
//         elseif ($req->user()->matchedToReceive()) {
//           return response()->json([
//               ['error' => 'Our records show that you are already matched to receive. If this is in error, <a class="text-uppercase text-bold" href="'. route('contact') .'">Contact Admin</a>. If it is true, then just relax.']
//           ], 409);
//         }
//
//         // Set his currentgh to the phamt and the ghbalance to the remaining 40%
//         // As he confirms users, we will be subtracting his currentgh until it goes below 500 then we wil set his tracker to be free of that One
//         // Then when he recommits,
//         elseif ($req->user()->dueforOriginalAmountGH()){
//
//           //check if there is a pending balance from the previous PH
//           //if there is FIRST add that balance to his currentgh
//           //Then add the original ph to his current gh too
//           //Then save the balance in the gh balance for th next time.
//           //THis way he will be receiving the original PH for this set and the previous profit of the last PH
//           // TODO: set an auto logout timeout. To prevent token fixation
//           if ($req->user()->ghbalance > 500) {
//             DB::beginTransaction();
//             // TODO: set an auto logout timeout. To prevent token fixation
//               $req->user()->tracker = 'requestsOriginalAndPastProfit';
//               $req->user()->currentgh = $req->user()->currentgh + $req->user()->phamt + $req->user()->ghbalance;
//               $req->user()->ghbalance = $req->user()->phamt * 0.4;
//               $req->user()->expectedgh = 0;
//               $req->user()->amtreceived = 0;
//               $req->user()->save();
//
//               Confirmation::newGHer($req->user()->id, $req->user()->currentgh);
//
//               Notice::newGHRequest($req->user()->id, $req->user()->currentgh);
//
//               // return $req->user();
//             DB::commit();
//
//           }
//
//           else {
//             DB::beginTransaction();
//               $req->user()->tracker = 'requestsOriginal';
//               $req->user()->currentgh = $req->user()->currentgh + $req->user()->phamt;
//               $req->user()->ghbalance = $req->user()->phamt * 0.2;
//               $req->user()->expectedgh = 0;
//               $req->user()->amtreceived = 0;
//               $req->user()->save();
//
//               Confirmation::newGHer($req->user()->id, $req->user()->phamt);
//
//               Notice::newGHRequest($req->user()->id, $req->user()->phamt);
//
//               // return $req->user();
//             DB::commit();
//           }
//
//           Cache::flush();
//
//           return [
//             'success' => true
//           ];
//
//         }
//
//     });
//
//     Route::get('/delete-notice/{id}', function (Request $req, $id) {
//             return [
//               'status' => Notice::destroy($id),
//             ];
//     });
//
//     Route::post('/get-user-phes-page-details', function (Request $req) {
//         return $req->user()->load(['matchedph.gherdetails', 'unmatchedph']);
//     });
//
//     Route::post('/upload-teller', function (Request $req) {
//
//       Cache::flush();
//
//           $req->user()->tracker = 'awaiting confirmation';
//           $req->user()->save();
//
//           return response()->json([
//               'status' =>  Confirmation::where('id', $req->confirmation_id)->update([
//                               'pherupload' => $req->filename,
//                               'pherconfirmstatus' => 'awaiting confirmation'
//                             ])
//           ], 200);
//     });
//
//     Route::post('/get-user-ghes-page-details', function (Request $req) {
//       return $req->user()->load(['ghes.pherdetails']);
//     });
//
//     Route::post('/confirm-ph', function (Request $req) {
//
//       DB::beginTransaction();
//
//       $confRecord = Confirmation::find($req->confirmation_id)->load(['pher','user']);
//       // return $confRecord;
//
//       // check if the pher still exists. In case this is a user that has already been deleted from the system
//       if ($confRecord->pher) {
//
//         // Add the amt hes been confirmed for to his phgiven and subtract from his phbalance
//         $confRecord->pher->phbalance = $confRecord->pher->phbalance - $confRecord->phamt; // Maybe set the phbalance when he uploads?
//         $confRecord->pher->phgiven = $confRecord->pher->phgiven + $confRecord->phamt;
//
//         // Then, set user tracker to confirmed IF his ph balance < 500 AND phamt - phgiven is < 500 indicating that he has paid all his ph
//         // otherwise set tracker to partially confirmed
//         if ($confRecord->pher->phbalance < 500 && $confRecord->pher->phamt - $confRecord->pher->phgiven < 500) {
//           $confRecord->pher->tracker = 'confirmed';
//         }
//         else{
//           $confRecord->pher->tracker = 'partially confirmed';
//         }
//
//         if($confRecord->pher->useraccstatus == 'suspended'){
//           $confRecord->pher->useraccstatus = 'active';
//         }
//
//         $confRecord->pher->save();
//
//       }
//       // set the confirmstatus in confirmation table to Confirmed
//       $confRecord->pherconfirmstatus = 'confirmed';
//       $confRecord->save();
//       Notice::sendConfirm20Alert($confRecord->pher_id, $confRecord->user->username, $confRecord->phamt);
//
//       // Add the amount he is confirming to his amtreceived and subtract it from his currenntgh
//       $confRecord->user->currentgh = $confRecord->user->currentgh - $confRecord->thisghamt;
//       $confRecord->user->amtreceived = $confRecord->user->amtreceived + $confRecord->thisghamt;
//
//       // THEN check his currentgh < 500 AND he has no more unpaid records on the confirmation table.
//       // If he does, set his tracker to free
//       if ($confRecord->user->currentgh < 500) {
//
//           if ($confRecord->user->expectedgh > 500) {
//             // This is his profit he just finished ghing
//             //set his tracker to confirmed so that if his due date reacvhes he can gh his new ph original
//             $confRecord->user->tracker = 'confirmed';
//           }
//
//           else{
//             // This is his last GH to receive
//             $confRecord->user->tracker = 'free';
//             $confRecord->user->ghcounter = $confRecord->user->ghcounter + 1;
//             $confRecord->user->expectedghdate = null;
//             $confRecord->user->expectedgh = 0;
//           }
//
//         //Create notice that he should recommit to get the balance
//       }
//
//       $confRecord->user->save();
//       Notice::sendConfirmedPHerAlert($confRecord->user->id, $confRecord->pher->username, $confRecord->phamt);
//
//
//       // delete that confirmation record
//       $confRecord->delete();
//
//       DB::commit();
//       Cache::flush();
//
//       return [
//         'status' => true
//       ];
//
//     });
//
//     Route::post('/decline-ph', function (Request $req) {
//
//       $confRecord = Confirmation::find($req->confirmation_id)->load(['pher.matchedph','gher']);
//       // return $req;
//       // return $confRecord;
//
//       DB::beginTransaction();
//       //set the user(pher) tracker to Suspended
//         $confRecord->pher->useraccstatus = 'suspended';
//         $confRecord->pher->save();
//       //remove the pher from the confirmation record
//         $confRecord->pher_id = null;
//         $confRecord->phamt = null;
//         $confRecord->pherupload = null;
//         $confRecord->pherconfirmstatus = null;
//         $confRecord->save();
//       //backdate the updated_at field of the confirmation record so that he will be rematched earlier
//         $confRecord->updated_at = Carbon::now()->subDays(30);
//       //search for any other confirmaton record where this pher has been set to Match
//         if ( !$confRecord->pher->matchedph->isEmpty() ) {
//           # TODO
//
//         }
//       //if there is, confirm decision.
//       //check if there is any record where this pher has not been matched to a gher yet (pherconfirmstatus == not matched). If there is, delete it.
//         if ( $confRecord->pher->unmatchedph->isEmpty() ) {
//           $confRecord->pher->unmatchedph()->delete();
//         }
//       //Set notices to the gher that the pher declined payment and has been removed. He will be matched soon
//         Notice::paymentDeclined($confRecord->pher->id, $confRecord->gher->username);
//
//       DB::commit();
//
//       Cache::flush();
//
//       return [
//         'status' => true
//       ];
//       // return $confRecord;
//     });
//
//     Route::post('/report-pher', function (Request $req) {
//       $confRecord = Confirmation::with('pher')->find($req->confirmation_id);
//
//       // return  $confRecord->pher;
//
//       DB::beginTransaction();
//       //set the user(pher) tracker to Suspended
//         $confRecord->pher->useraccstatus = 'suspended';
//         $confRecord->pher->save();
//
//       // Set the confirmation status to disputed. This is until the admin resolves the case.
//         $confRecord->pherconfirmstatus = 'under dispute';
//         $confRecord->save();
//
//         //Notify Pher that his payment is disputed
//         Message::donationDisputed($confRecord->pher_id, $req->user()->id, $req->user()->username);
//
//         //Notify Gher that he is disputing a Payment
//         Notice::disputingDonation($req->user()->id, $confRecord->phamt);
//
//         //Notify admin that there is a dispute
//         Message::disputeAdminNotify($req->user()->id, $req->user()->username, $confRecord->id);
//
//       DB::commit();
//
//       return [
//         'status' => true
//       ];
//
//     });
//
// });
