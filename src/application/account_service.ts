import {addAccountDb, getAllAccountsDb, getOneAccountDb,} from "../infrastructure/repository/account_repository.ts";

export const getAllAccounts = async () => {
  return await getAllAccountsDb();
};

export const getOneAccount = async (account_id: number) => {
  return await getOneAccountDb(account_id);
};

export const addAccount = async (account_name: string) => {
  return await addAccountDb(account_name);
};
