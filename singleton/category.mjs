import { getConnection } from "./connection.mjs";

export class Category {
  constructor(id, category) {
    this.id = id;
    this.category = category;
  }

  save() {
    const db = getConnection();

    const sql = "INSERT INTO categories (id, category) VALUES (?, ?)";
    db.query(sql, [this.id, this.category], (err, result) => {
      if (err) throw err;

      console.log("Category saved!");
    });
  }
}

