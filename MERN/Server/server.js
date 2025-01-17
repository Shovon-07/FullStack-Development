require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const connectDb = require("./Utility/db");

//___ Express api ___//
const authRoute = require("./Routes/AuthRoute");
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.status(200).send("This is server");
});

//___ Run server ___//
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is connected @ ${PORT}`);
  });
});

// Mongodb cridentials
// pass : 6P4fRZT9J6tDOZF3
