import { getConnection } from "./connection.mjs";

export class Product {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  save() {
    const db = getConnection();

    const sql = "INSERT INTO products (id, name) VALUES (?, ?)";
    db.query(sql, [this.id, this.name], (err, result) => {
      if (err) throw err;

      console.log("Product saved!");
    });
  }
}
