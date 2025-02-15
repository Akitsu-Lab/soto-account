import {Context} from "npm:hono";
import {addAccount, deleteAccount, getAllAccounts, getOneAccount,} from "../application/accountService.ts";

export const getAllAccountsHandler = async (c: Context) => {
  const accounts = await getAllAccounts();
  return c.json(accounts);
};

export const getOneAccountHandler = async (c: Context) => {
  const accountId = c.req.param("accountId");
  const account = await getOneAccount(Number(accountId));
  if (account) {
    return c.json(account);
  } else {
    return c.text("Account not found", 404);
  }
};

export const addAccountHandler = async (c: Context) => {
  const { accountName } = await c.req.json();
  await addAccount(accountName);
  return c.text(`Account '${accountName}' added`, 201);
};

export const deleteAccountHandler = async (c: Context) => {
  const accountId = c.req.param("accountId");
  await deleteAccount(Number(accountId));
  return c.text(`Account '${accountId}' deleted`, 201);
};
