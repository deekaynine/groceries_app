// require("dotenv").config()
// const { Client } = require("pg");


// const SQL = `
// INSERT INTO product (name, price, stock , category_id)
// VALUES
// ('Low-fat milk 2%', 5.99, 99, 2),
// ('Sour Cream Pringles', 2.99, 99, 3),
// ('Classic Lays', 1.99, 99, 3),
// ('Hot Pockets Pepperoni', 3.99, 99, 4),
// ('Sprite', 2.99, 99, 5),
// ('Orange', 1.09, 99, 1);
// `;

// async function main() {
//   console.log("seeding...");
//   const client = new Client({
//     connectionString: `postgresql://${process.env.role}:${process.env.role_password}@localhost:5432/groceries_db`,
//   });
//   await client.connect();
//   await client.query(SQL);
//   await client.end();
//   console.log("done");
// }

// main();