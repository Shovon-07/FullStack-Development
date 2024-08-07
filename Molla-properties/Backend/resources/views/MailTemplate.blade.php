<!DOCTYPE html>
<html>
  <head>
    <title>Contact Us</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .body {
        background: #1f1f1f;
        color: #efefef;
        padding: 20px;
      }
      .title span {
        text-transform: capitalize;
        color: rgb(1, 212, 1);
      }
      .msgBody {
        margin: 30px 0;
      }
      .msgBody div {
        margin: 30px 0;
      }
      .msgBody div h3 {
        color: rgb(1, 212, 1);
        font-weight: bold;
      }
      .msgBody p {
        font-size: 1.2rem;
        margin-top: 8px;
      }
      hr {
        border: 1px solid rgb(255, 115, 0);
      }
      .regards {
        text-align: right;
        margin-top: 20px;
      }
      .regards p {
        font-size: 1rem;
        margin-top: 10px;
      }
    </style>
  </head>

  <body class="body">
    <h1 class="title"><span>{{$mailData["name"]}}</span> contact with us</h1>
    <div class="msgBody">
      <div>
        <h3>Name :</h3>
        <p>{{$mailData["name"]}}</p>
      </div>
      <div>
        <h3>Email :</h3>
        <p>{{$mailData["email"]}}</p>
      </div>
      <div>
        <h3>Subject :</h3>
        <p>{{$mailData["subject"]}}</p>
      </div>
      <div>
        <h3>Message :</h3>
        <p>{{$mailData["message"]}}</p>
      </div>
    </div>
    <hr />
    <div class="regards">
      <h2>{{env("APP_NAME")}}</h2>
      <p>Dangipara, Paba, Rajshahi</p>
      <p>support@molla-properties.com</p>
    </div>
  </body>
</html>
