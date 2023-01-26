const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'password1999',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
  db.connect(function(error){
    if (error) throw error;
  });

  module.exports=db

