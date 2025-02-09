import { Hono } from "npm:hono";
import accounts from "./routes/accounts.ts";

const app = new Hono();

app.route("/accounts", accounts);

Deno.serve({ port: 8000 }, app.fetch);

console.log(Deno.env.get("DB_HOST"))
console.log(Deno.env.get("DB_USER"))
console.log(Deno.env.get("DB_PASS"))
console.log(Deno.env.get("DB_SCHEMA"))