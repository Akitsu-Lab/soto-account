import {addAccountDb, getAllAccountsDb, getOneAccountDb,} from "../infrastructure/repository/accountRepository.ts";

export const getAllAccounts = async () => {
  return await getAllAccountsDb();
};

export const getOneAccount = async (account_id: number) => {
  return await getOneAccountDb(account_id);
};

export const addAccount = async (account_name: string) => {
  return await addAccountDb(account_name);
};
