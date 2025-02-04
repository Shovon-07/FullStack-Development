const mysql = require("mysql2");

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST, // e.g., 'localhost' or 'yourdomain.com'
  user: process.env.DB_USERNAME, // cPanel database username
  password: process.env.DB_PASSWORD, // cPanel database password
  database: process.env.DB_DATABASE, // cPanel database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Export the pool for use in other files
module.exports = pool.promise();
