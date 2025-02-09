import { Hono } from "npm:hono";
import accounts from "./routes/accounts.ts";

const app = new Hono();

app.route("/accounts", accounts);

Deno.serve({ port: 8000 }, app.fetch);
