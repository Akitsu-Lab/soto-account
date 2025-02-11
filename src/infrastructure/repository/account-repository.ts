import connection from "../../config/db.ts";
import {accountDto} from "../dto/account-dto.ts";
import {RowDataPacket} from "npm:mysql2@2.3.3";

export const getAllAccountsDb = async () => {
  const [rows] = await connection.query("SELECT * FROM `accounts`");
  return rows;
};

export const getOneAccountDb = async (accountId: number) => {
  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT * FROM `accounts` WHERE account_id = ?",
    accountId,
  );

  if (rows.length === 0) {
    return null;
  } else {
    const account: accountDto = {
      accountId: rows[0].account_id,
      accountName: rows[0].account_name,
      balance: rows[0].account_balance,
    };
    console.log(accountId, account.accountName, account.balance);
    return account;
  }
};

export const addAccountDb = async (accountName: string) => {
  {
    await connection.query(
      "INSERT INTO `accounts` (account_name) VALUES (?)",
      [accountName],
    );
  }
};
