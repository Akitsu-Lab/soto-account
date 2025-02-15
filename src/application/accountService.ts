import {
  addAccountDb,
  deleteAccountDb,
  getAllAccountsDb,
  getOneAccountDb,
} from "../infrastructure/repository/accountRepository.ts";
import { AccountId } from "../domain/valueObjects/accountId.ts";
import { AccountName } from "../domain/valueObjects/accountName.ts";

export const getAllAccounts = async () => {
  return await getAllAccountsDb();
};

export const getOneAccount = async (accountId: AccountId) => {
  return await getOneAccountDb(accountId);
};

export const addAccount = async (accountName: AccountName) => {
  return await addAccountDb(accountName);
};

export const deleteAccount = async (accountId: AccountId) => {
  return await deleteAccountDb(accountId);
};
