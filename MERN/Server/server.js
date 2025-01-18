require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;

//==> Middleware
app.use(express.json());

//==> Express api's
app.get("/", (req, res) => {
  res.send("This is backend");
});

const authRoute = require("./Routes/auth-route");
app.use("/api/auth", authRoute);

//==> Run server
app.listen(PORT, () => {
  console.log(`Server is connected @ : ${PORT}`);
});
