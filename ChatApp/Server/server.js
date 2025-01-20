require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");

//==> Middleware
// Cors handle
// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
app.use(cors());

app.use(express.json());

//==> Express api's
app.get("/api", (req, res) => {
  res.send("This is backend");
});

const authRoute = require("./Routes/auth-route");
app.use("/api/auth", authRoute);

//==> Run server
app.listen(PORT, () => {
  console.log(`Server is connected @ : ${PORT}`);
});
