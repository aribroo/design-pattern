import mysql from "mysql";

let connection = null;

export function getConnection() {
  if (!connection) {
    connection = mysql.createConnection({
      host: "localhost",
      database: "singleton",
      user: "root",
      password: "",
    });

    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to database:", err);
      } else {
        console.log("Connected to database!");
      }
    });
  }

  return connection;
}
