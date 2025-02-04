require("dotenv").config();
const express = require("express");
const { createServer } = require("http");
const PORT = 3001;
const cors = require("cors");

const app = express();
const server = createServer(app);

//==> Middleware start
// Cors handle
// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionsSuccessStatus: 200,
// };
app.use(cors());

app.use(express.json());
//==> Middleware end

//==> Express api's
app.get("/api", (req, res) => {
  res.send("This is backend");
});

// const authRoute = require("./Routes/auth-route");
// app.use("/api/auth", authRoute);

const securityRoute = require("./Routes/security-route");
app.use("/api/security", securityRoute);

//==> Run server
server.listen(PORT, () => {
  console.log(`Server is connected @ : ${PORT}`);
});
