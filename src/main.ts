import { Hono } from "npm:hono";
import { logger } from 'npm:hono/logger';
import accountsRoutes from "./routes/accounts-routes.ts";

const app = new Hono();

// ログ設定
export const customLogger = (message: string, ...rest: string[]) => {
    const timestamp = new Date().toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
    });
    console.log(`[${timestamp}] ${message}`, ...rest)
}
app.use(logger(customLogger))

app.route("/accounts", accountsRoutes);

Deno.serve({ port: 8000 }, app.fetch);
