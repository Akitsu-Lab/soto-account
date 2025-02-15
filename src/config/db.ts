import mysql from "npm:mysql2@^2.3.3/promise";

const connection = await mysql.createConnection({
  host: Deno.env.get("DB_HOST"),
  user: Deno.env.get("DB_USER"),
  password: Deno.env.get("DB_PASS"),
  database: Deno.env.get("DB_SCHEMA"), // ここでDBを指定
});

export default connection;
