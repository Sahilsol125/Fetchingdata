const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sahil@123',
  database: 'enployeedb',
});

connection.connect(function (err) {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected!");

  const name = 'UJALA';
  const email = 'UJALA656@gmail.com';
  const password = 'Ujala12'; // Replace with hashed password

  const sql = "INSERT INTO employee (name, Email, password) VALUES (?, ?, ?)";
  connection.query(sql, [name, email, password], function (err, result) {
    if (err) {
      console.error("Error inserting record:", err);
    } else {
      console.log("1 record inserted");
    }
    // Close the MySQL connection
    connection.end();
  });
});
