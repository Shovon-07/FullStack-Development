const express = require("express");
const app = express();
const PORT = 3000;
const DB = require("./Util/DB");

app.get("/", (req, res) => {
  res.send("This is backend");
});

// app.get("/user", (req, res) => {
//   DB.query("SELECT * FROM users", (err, result, field) => {
//     if (err) {
//       console.log(err);
//       return;
//     } else {
//       console.log(result);
//       res.status(200).json({ data: result });
//     }
//   });
// });

//==> Run server
app.listen(PORT, () => {
  console.log(`Server is connected @ : ${PORT}`);
});
