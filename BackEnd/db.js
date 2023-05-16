const mysql = require("mysql2");

const mysqlConfigBase = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
};

const dbConnection = mysql.createConnection({
  ...mysqlConfigBase,
  database: "",
});

// for the first time, then database not built
dbConnection.query("CREATE DATABASE IF NOT EXISTS blog_posts", function (err) {
  if (err) throw err;
  console.log("Database blog_posts created");

  dbConnection.query("USE blog_posts", (err) => {
    if (err) throw err;

    const blogTableQuery = `
      CREATE TABLE IF NOT EXISTS posts (
        id INT NOT NULL AUTO_INCREMENT,
        title VARCHAR(100) NOT NULL,
        text VARCHAR(255) NOT NULL,
        username VARCHAR(100) NOT NULL,
        primary key (id))`;
    
        dbConnection.query(blogTableQuery, (err) => {
      if (err) throw err;
      console.log("Posts Table created!");
    });
  });
});

// EXPORTS --------------------------------------------------
module.exports = {
  dbConnection,
};
