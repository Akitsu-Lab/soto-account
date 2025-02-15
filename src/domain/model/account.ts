import { AccountId } from "../valueObjects/accountId.ts";
import { AccountName } from "../valueObjects/accountName.ts";
import { Balance } from "../valueObjects/balance.ts";

export class Account {
  accountId: AccountId;
  accountName: AccountName;
  balance: Balance;
  constructor(
    accountId: AccountId,
    accountName: AccountName,
    balance: Balance,
  ) {
    this.accountId = accountId;
    this.accountName = accountName;
    this.balance = balance;
  }
}
