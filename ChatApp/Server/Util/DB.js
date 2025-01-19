const mysql = require("mysql");

const config = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

config.connect((err) => {
  if (err) {
    console.log(err);
    connection.destroy();
    return;
  }
  console.log(`Database connected : ${config.threadId}`);
});

module.exports = config;
