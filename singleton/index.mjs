import { Category } from "./category.mjs";
import { Product } from "./product.mjs";

const category = new Category(2, "Electronic");
const product = new Product(2, "Monitor");

setTimeout(() => {
  process.exit(0);
}, 2000);

category.save();
product.save();
