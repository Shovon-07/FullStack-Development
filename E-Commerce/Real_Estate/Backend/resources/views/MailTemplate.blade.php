<!DOCTYPE html>
<html>

<head>
  <title>Contact Us</title>
  <style>
    .body {
      background: #efefef;
      padding: 10px 20px;
    }

    .title span {
      text-transform: capitalize;
      color: #0fa802;
    }

    table tr td {
      padding: 10px;
      font-size: 1rem;
      vertical-align: baseline;
      text-align: justify;
    }

    hr {
      border: 1px solid rgb(255, 115, 0);
    }

    .regards {
      text-align: right;
    }

    .regards p {
      font-size: 1rem;
    }
  </style>
</head>

<body class="body">
  <h1 class="title"><span>{{$mailData["name"]}}</span> contact with us</h1>
  <table>
    <tr>
      <td>Name</td>
      <td>:</td>
      <td>{{$mailData["name"]}}</td>
    </tr>
    <tr>
      <td>Subject</td>
      <td>:</td>
      <td>{{$mailData["subject"]}}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>:</td>
      <td>{{$mailData["email"]}}</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>:</td>
      <td>{{$mailData["message"]}}</td>
    </tr>
  </table>
  <hr>
  <div class="regards">
    <h2>{{env("APP_NAME")}}</h2>
    <p>Dangipara, Paba, Rajshahi</p>
    <p>mollaproperties@gmail.com</p>
  </div>
</body>

</html>