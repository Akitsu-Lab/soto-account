import { Context } from "npm:hono";
import {
  addAccount,
  getAllAccounts,
  getOneAccount,
} from "../application/account-service.ts";

export const getAllAccountsHandler = async (c: Context) => {
  const accounts = await getAllAccounts();
  return c.json(accounts);
};

export const getOneAccountHandler = async (c: Context) => {
  const accountId = c.req.param("account_id");
  const account = await getOneAccount(Number(accountId));
  if (account) {
    return c.json(account);
  } else {
    return c.text("Account not found", 404);
  }
};

export const addAccountHandler = async (c: Context) => {
  try {
    const { account_name } = await c.req.json();
    await addAccount(account_name);
    return c.text(`Account '${account_name}' added`, 201);
  } catch (error: any) { // TODO: any以外の型にしたい
    if (error.code === "ER_DUP_ENTRY") {
      return c.text("Duplicate account name", 409);
    }
    return c.text("Internal Server Error", 500);
  }
};
