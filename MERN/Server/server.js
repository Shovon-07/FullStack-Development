const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Express api
const router = require("./Router/auth-router");
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.status(200).send("This is backend");
});

// Run server
app.listen(PORT, () => {
  console.log("Server is connected at : " + PORT);
});
