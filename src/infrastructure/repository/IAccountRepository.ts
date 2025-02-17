import { Account } from "../../domain/model/account.ts";
import { AccountName } from "../../domain/valueObjects/accountName.ts";

export interface IAccountRepository {
  getAllAccounts(): Promise<Account[]>;
  getOneAccount(account_id: number): Promise<Account>;
  addAccount(accountName: AccountName): Promise<void>;
  deleteAccount(accountId: number): Promise<void>;
}
