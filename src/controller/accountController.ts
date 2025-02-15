import { Context } from "npm:hono";
import {
  addAccount,
  deleteAccount,
  getAllAccounts,
  getOneAccount,
} from "../application/accountService.ts";
import { AccountId } from "../domain/valueObjects/accountId.ts";
import { AccountName } from "../domain/valueObjects/accountName.ts";

export const getAllAccountsHandler = async (c: Context) => {
  const accounts = await getAllAccounts();
  return c.json(accounts);
};

export const getOneAccountHandler = async (c: Context) => {
  const accountIdFromParam = c.req.param("accountId");
  const accountId = new AccountId(Number(accountIdFromParam));
  // accountIdと一致するアカウントを取得する
  const account = await getOneAccount(accountId);
  if (account) {
    return c.json(account);
  } else {
    return c.text("Account not found", 404);
  }
};

export const addAccountHandler = async (c: Context) => {
  const { accountName: accountNameFromBody } = await c.req.json();
  const accountName = new AccountName(accountNameFromBody);
  await addAccount(accountName);
  return c.text(`Account '${accountName.value}' added`, 201);
};

export const deleteAccountHandler = async (c: Context) => {
  const accountIdFromParam = c.req.param("accountId");
  const accountId = new AccountId(Number(accountIdFromParam));
  await deleteAccount(accountId);
  return c.text(`AccountId: '${accountId.value}' deleted`, 201);
};
