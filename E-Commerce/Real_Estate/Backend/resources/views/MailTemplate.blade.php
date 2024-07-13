<!DOCTYPE html>
<html>

<head>
  <title>Contact Form Submission</title>
</head>

<body>
  <h1>Contact Form Submission</h1>
  <p><strong>Name:</strong> {{ $mailData['name'] }}</p>
  <p><strong>Email:</strong> {{ $mailData['email'] }}</p>
  <p><strong>Message:</strong></p>
  <p>{{ $mailData['message'] }}</p>
</body>

</html>