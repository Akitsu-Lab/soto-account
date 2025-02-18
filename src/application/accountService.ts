import { AccountRepositoryImpl } from "../infrastructure/repository/accountRepositoryImpl.ts";
import { AccountId } from "../domain/valueObjects/accountId.ts";
import { AccountName } from "../domain/valueObjects/accountName.ts";

export class AccountService {
  private accountRepository;

  constructor(accountRepository: AccountRepositoryImpl) {
    this.accountRepository = accountRepository;
  }

  async getAllAccounts() {
    return await this.accountRepository.getAllAccountsDb();
  }

  async getOneAccount(accountId: AccountId) {
    return await this.accountRepository.getOneAccountDb(accountId);
  }

  async addAccount(accountName: AccountName) {
    return await this.accountRepository.addAccountDb(accountName);
  }

  async deleteAccount(accountId: AccountId) {
    return await this.accountRepository.deleteAccountDb(accountId);
  }
}
