import {Hono} from "npm:hono";
import {cors} from "npm:hono/cors";
import {logger} from "npm:hono/logger";
import accountsRoutes from "./routes/accountsRoutes.ts";

const app = new Hono();

// CORSミドルウェアの適用
app.use(
  "*",
  cors({
    origin: "https://soto-ui.vercel.app",
    allowMethods: ["GET", "POST", "PUT", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization"],
    maxAge: 600,
  }),
);

// ログ設定
export const customLogger = (message: string, ...rest: string[]) => {
  const timestamp = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });
  console.log(`[${timestamp}] ${message}`, ...rest);
};
app.use(logger(customLogger));

app.route("/accounts", accountsRoutes);

Deno.serve({ port: 8000 }, app.fetch);
