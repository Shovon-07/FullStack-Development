require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const DB = require("./Utility/DB");

// For use json data
app.use(express.json());

//___ Express api ___//
app.get("/", (req, res) => {
  console.log("This server");
});

const authRoute = require("./Routes/auth-route");
app.use("/api/auth", authRoute);

DB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is connected @ ${PORT} port`);
  });
});
