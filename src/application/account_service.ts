import { getAccounts } from "../infrastructure/repository/account_repository.ts";

export const fetchAccounts = async () => {
    return await getAccounts();
};