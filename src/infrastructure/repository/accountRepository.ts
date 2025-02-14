import connection from "../../config/db.ts";
import {AccountDto} from "../dto/accountDto.ts";
import {RowDataPacket} from "npm:mysql2@2.3.3";
import {customLogger} from "../../main.ts";

export const getAllAccountsDb = async () => {
  customLogger("Connecting to the database...");
  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT * FROM `accounts`",
  );
  // DBレコードをを DTO に変換
  const accounts = rows.map((row) =>
    new AccountDto(row.account_id, row.account_name, row.balance)
  );
  accounts.forEach((account) => {
    customLogger(
      `accountId: ${account.accountId}, accountName: ${account.accountName}, balance: ${account.balance}`,
    );
  });
  return accounts;
};

export const getOneAccountDb = async (accountId: number) => {
  customLogger("Connecting to the database...");
  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT * FROM `accounts` WHERE account_id = ?",
    accountId,
  );

  if (rows.length === 0) {
    return null;
  } else {
    // DBレコードをを DTO に変換
    const accountDto = new AccountDto(
      rows[0].account_id,
      rows[0].account_name,
      rows[0].balance,
    );
    customLogger(
      `accountId: ${accountDto.accountId}, accountName: ${accountDto.accountName}, balance: ${accountDto.balance}`,
    );
    return accountDto;
  }
};

export const addAccountDb = async (accountName: string) => {
  customLogger("Connecting to the database...");
  try {
    await connection.query(
      "INSERT INTO `accounts` (account_name) VALUES (?)",
      [accountName],
    );
  } catch (err) {
    if (err instanceof Error) {
      customLogger("query error:", err.message);
    }
    throw err;
  }
};

export const deleteAccountDb = async (accountId: number) => {
  customLogger("Connecting to the database...");
  console.log({ accountId });
  try {
    // TODO: トランザクション処理を入れたい
    await connection.query(
      "DELETE FROM `purchases` WHERE account_id = ?",
      [accountId],
    );
    await connection.query(
      "DELETE FROM `accounts` WHERE account_id = ?",
      [accountId],
    );
  } catch (err) {
    if (err instanceof Error) {
      customLogger("query error:", err.message);
    }
    throw err;
  }
};
