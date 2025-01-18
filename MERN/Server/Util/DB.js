const mysql = require("mysql");

const config = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ChatApp",
});

config.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Database connected : ${config.threadId}`);
});

module.exports = config;
