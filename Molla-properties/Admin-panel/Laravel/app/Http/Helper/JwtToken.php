<?php

namespace App\Http\Helper;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtToken
{
  public static function CreateToken($userId, $userEmail)
  {
    $key = env("JWT_VERIFY_TOKEN");
    $payload = [
      'iss' => env("APP_URL"),
      'iat' => time(),
      'exp' => time() + 60 * 60,
      'userId' => $userId,
      'userEmail' => $userEmail
    ];
    return JWT::encode($payload, $key, 'HS256');
  }
  public function VerifyToken()
  {
  }
}