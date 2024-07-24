<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        dd($_COOKIE['items']);
    }
    public function request()
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://payment.zarinpal.com/pg/v4/payment/request.json',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{  "merchant_id": "e80e758e-5532-42c6-967b-bc69e06e9bc4",
          "amount": 20000,
          "callback_url": "http://127.0.0.1:8000/test/respons",
          "description": "Transaction description.",
          "metadata": {"mobile": "09121234567","email": "info.test@gmail.com"}
        }',
            CURLOPT_HTTPHEADER => array(
                'accept: application/json',
                'content-type: application/json'
            ),
            CURLOPT_SSL_VERIFYHOST => false,
            CURLOPT_SSL_VERIFYPEER => false,
        ));

        $response = curl_exec($curl);

        if ($response === false) {
            $error = curl_error($curl);
            dd($error);
        }

        curl_close($curl);

        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($httpCode == 200) {
            $this->result($response);
        }
    }
    public function result($response)
    {
        // فرض کنید $result حاوی پاسخ دریافتی از مرحله اول است
        $result = json_decode($response, true);

        // بررسی کد پاسخ
        if ($result['data']['code'] == 100) {
            // مقدار authority را دریافت می‌کنیم
            $authority = $result['data']['authority'];

            // URL ریدایرکت به درگاه پرداخت
            $redirectUrl = 'https://payment.zarinpal.com/pg/StartPay/' . $authority;
            // ریدایرکت به درگاه پرداخت
            header("Location: $redirectUrl");
            exit();
        } else {
            // در صورتی که کد پاسخ موفق نباشد، خطا را نمایش دهید
            echo "Error: " . $result['data']['message'];
        }
    }

    public function respponse(Request $request)
    {
        // دریافت authority و status از درخواست
        $authority = $request->input('Authority');
        $status = $request->input('Status');

        // بررسی وضعیت پرداخت
        if ($status == 'OK') {
            // اگر پرداخت موفق بود، درخواست تأیید پرداخت را ارسال می‌کنیم
            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://payment.zarinpal.com/pg/v4/payment/verify.json',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode([
                    'merchant_id' => 'e80e758e-5532-42c6-967b-bc69e06e9bc4',
                    'amount' => 2000, // مقدار پرداختی که باید بررسی شود
                    'authority' => $authority,
                ]),
                CURLOPT_HTTPHEADER => array(
                    'accept: application/json',
                    'content-type: application/json',
                ),
            ));

            $response = curl_exec($curl);

            if ($response === false) {
                $error = curl_error($curl);
                dd($error);
            }

            curl_close($curl);

            $result = json_decode($response, true);

            // بررسی نتیجه تأیید پرداخت
            if ($result['data']['code'] == 100) {
                // پرداخت موفق
                echo "Payment successful. RefID: " . $result['data']['ref_id'];
            } else {
                // پرداخت ناموفق
                echo "Payment failed. Code: " . $result['data']['code'] . " Message: " . $result['data']['message'];
            }
        } else {
            // وضعیت پرداخت ناموفق
            echo "Payment was not successful. Status: " . $status;
        }
    }
}
