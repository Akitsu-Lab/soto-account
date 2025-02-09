import {
  addAccountDb,
  getAllAccountsDb,
} from "../infrastructure/repository/account_repository.ts";

export const getAllAccounts = async () => {
  return await getAllAccountsDb();
};

export const addAccount = async (account_name: string) => {
  return await addAccountDb(account_name);
};
