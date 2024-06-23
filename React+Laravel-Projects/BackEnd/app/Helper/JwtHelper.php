<?php

namespace App\Helper;

use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtHelper
{
  public static function CreateToken($userId, $userEmail)
  {
    $key = env("JWT_KEY");
    $payload = [
      'iss' => env("APP_NAME"),
      'iat' => time(),
      'exp' => time() + 60 * 60,
      'userId' => $userId,
      'userEmail' => $userEmail
    ];
    return JWT::encode($payload, $key, "HS256");
  }

  public static function verifyToken($token)
  {
    try {
      if ($token == null) {
        return 'Unauthorized';
      } else {
        $key = env('JWT_KEY');
        $decode = JWT::decode($token, new Key($key, 'HS256'));
        return $decode;
      }
    } catch (Exception $e) {
      return 'Unauthorized';
    }
  }
}