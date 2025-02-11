import { Hono } from "npm:hono";
import accountsRoutes from "./routes/accounts-routes.ts";

const app = new Hono();

app.route("/accounts", accountsRoutes);

Deno.serve({ port: 8000 }, app.fetch);
