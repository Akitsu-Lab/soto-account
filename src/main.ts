import { Hono } from "npm:hono";
import accounts_routes from "./routes/accounts_routes.ts";

const app = new Hono();

app.route("/accounts", accounts_routes);

Deno.serve({ port: 8000 }, app.fetch);
