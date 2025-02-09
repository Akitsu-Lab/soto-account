import { Hono } from "npm:hono";
import { getAccountsHandler } from "../controller/account_controller.ts";

const accounts = new Hono();
accounts.get("/", getAccountsHandler);

export default accounts;