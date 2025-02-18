import { Account } from "../../domain/model/account.ts";
import { AccountName } from "../../domain/valueObjects/accountName.ts";
import { AccountId } from "../../domain/valueObjects/accountId.ts";

export interface AccountRepository {
  getAllAccountsDb(): Promise<Account[]>;
  getOneAccountDb(account_id: AccountId): Promise<Account>;
  addAccountDb(accountName: AccountName): Promise<void>;
  deleteAccountDb(accountId: AccountId): Promise<void>;
}
