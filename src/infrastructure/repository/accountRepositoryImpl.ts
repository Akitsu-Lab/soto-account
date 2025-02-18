import connection from "../../config/db.ts";
import { RowDataPacket } from "npm:mysql2@2.3.3";
import { customLogger } from "../../main.ts";
import { Account } from "../../domain/model/account.ts";
import { AccountId } from "../../domain/valueObjects/accountId.ts";
import { AccountName } from "../../domain/valueObjects/accountName.ts";

export class AccountRepositoryImpl implements AccountRepositoryImpl {
  async getAllAccountsDb() {
    customLogger("Connecting to the database...");
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `accounts`",
    );
    // DBレコードを ドメインモデル に変換
    const accounts = rows.map((row) =>
      new Account(row.account_id, row.account_name, row.balance)
    );
    accounts.forEach((account) => {
      customLogger(
        `accountId: ${account.accountId}, accountName: ${account.accountName}, balance: ${account.balance}`,
      );
    });
    return accounts;
  }

  async getOneAccountDb(accountId: AccountId) {
    customLogger("Connecting to the database...");
    const [rows] = await connection.query<RowDataPacket[]>(
      "SELECT * FROM `accounts` WHERE account_id = ?",
      accountId.value,
    );

    if (rows.length === 0) {
      return null;
    } else {
      // DBレコードを モデル に変換
      const account = new Account(
        rows[0].account_id,
        rows[0].account_name,
        rows[0].balance,
      );
      customLogger(
        `accountId: ${account.accountId}, accountName: ${account.accountName}, balance: ${account.balance}`,
      );
      return account;
    }
  }

  async addAccountDb(accountName: AccountName) {
    customLogger("Connecting to the database...");
    try {
      await connection.query(
        "INSERT INTO `accounts` (account_name) VALUES (?)",
        [accountName.value],
      );
    } catch (err) {
      if (err instanceof Error) {
        customLogger("query error:", err.message);
      }
      throw err;
    }
  }

  async deleteAccountDb(accountId: AccountId) {
    customLogger("Connecting to the database...");
    try {
      // TODO: トランザクション処理を入れたい
      await connection.query(
        "DELETE FROM `purchases` WHERE account_id = ?",
        [accountId.value],
      );
      await connection.query(
        "DELETE FROM `accounts` WHERE account_id = ?",
        [accountId.value],
      );
    } catch (err) {
      if (err instanceof Error) {
        customLogger("query error:", err.message);
      }
      throw err;
    }
  }
}
