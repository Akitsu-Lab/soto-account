import { Context } from "npm:hono";
import { AccountService } from "../application/accountService.ts";
import { AccountId } from "../domain/valueObjects/accountId.ts";
import { AccountName } from "../domain/valueObjects/accountName.ts";

export class AccountController {
  private accountService: AccountService;

  constructor(accountService: AccountService) {
    this.accountService = accountService;
  }

  async getAllAccountsHandler(c: Context) {
    const accounts = await this.accountService.getAllAccounts();
    return c.json(accounts);
  }

  async getOneAccountHandler(c: Context) {
    const accountIdFromParam = c.req.param("accountId");
    const accountId = new AccountId(Number(accountIdFromParam));
    // accountIdと一致するアカウントを取得する
    const account = await this.accountService.getOneAccount(accountId);
    if (account) {
      return c.json(account);
    } else {
      return c.text("Account not found", 404);
    }
  }

  async addAccountHandler(c: Context) {
    const { accountName: accountNameFromBody } = await c.req.json();
    const accountName = new AccountName(accountNameFromBody);
    await this.accountService.addAccount(accountName);
    return c.text(`Account '${accountName.value}' added`, 201);
  }

  async deleteAccountHandler(c: Context) {
    const accountIdFromParam = c.req.param("accountId");
    const accountId = new AccountId(Number(accountIdFromParam));
    await this.accountService.deleteAccount(accountId);
    return c.text(`AccountId: '${accountId.value}' deleted`, 201);
  }
}
