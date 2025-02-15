import {
    addAccountDb,
    deleteAccountDb,
    getAllAccountsDb,
    getOneAccountDb,
} from "../infrastructure/repository/accountRepository.ts";

export const getAllAccounts = async () => {
  return await getAllAccountsDb();
};

export const getOneAccount = async (accountId: number) => {
  return await getOneAccountDb(accountId);
};

export const addAccount = async (accountName: string) => {
  return await addAccountDb(accountName);
};

export const deleteAccount = async (accountId: number) => {
  return await deleteAccountDb(accountId);
};
