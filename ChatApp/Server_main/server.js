require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const DB = require("./Utility/DB");
const cors = require("cors");

// Cors handle
// const corsOptions = {
//   origin: "http://localhost:5173/",
//   optionsSuccessStatus: 200,
// };
app.use(cors());

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
