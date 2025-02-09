import { fetchAccounts } from "../application/account_service.ts";
import { Context } from "npm:hono";

export const getAccountsHandler = async (c: Context) => {
    const accounts = await fetchAccounts();
    return c.json(accounts);
};