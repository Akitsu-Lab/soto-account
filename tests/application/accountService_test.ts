import { Account } from "../../src/domain/model/account.ts";
import { AccountService } from "../../src/application/accountService.ts";
import { AccountRepository } from "../../src/infrastructure/repository/AccountRepository.ts";
import { AccountName } from "../../src/domain/valueObjects/accountName.ts";
import { AccountId } from "../../src/domain/valueObjects/accountId.ts";
import { Balance } from "../../src/domain/valueObjects/balance.ts";
import { assertEquals } from "https://deno.land/std@0.104.0/testing/asserts.ts";

// テスト用モック
class AccountRepositoryMock implements AccountRepository {
  private data: Record<number, Account> = {
    1: new Account(
      new AccountId(1),
      new AccountName("TestAccount"),
      new Balance(1000),
    ),
  };

  async getAllAccountsDb(): Promise<Account[]> {
    return Object.values(this.data);
  }
  async getOneAccountDb(accountId: AccountId): Promise<Account> {
    return this.data[accountId.value];
  }
  async addAccountDb(accountName: AccountName): Promise<void> {
    const newId = Object.keys(this.data).length + 1;
    this.data[newId] = new Account(
      new AccountId(newId),
      accountName,
      new Balance(0),
    );
  }
  async deleteAccountDb(accountId: AccountId): Promise<void> {}
}

Deno.test("getAllAccounts", async () => {
  const accountRepositoryMock = new AccountRepositoryMock();
  const accountService = new AccountService(accountRepositoryMock);
  const accounts = await accountService.getAllAccounts();
  assertEquals(accounts.length, 1);
  assertEquals(accounts[0].accountName.value, "TestAccount");
});
