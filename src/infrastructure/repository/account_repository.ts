import connection from "../../config/db.ts";

export const getAllAccountsDb = async () => {
  const [rows] = await connection.query("SELECT * FROM `accounts`");
  return rows;
};

export const getOneAccountDb = async (accountId: number) => {
  const [rows] = await connection.query("SELECT * FROM `accounts` WHERE account_id = ?", accountId);
  return rows;
}

export const addAccountDb = async (accountName: string) => {
  {
    await connection.query(
      "INSERT INTO `accounts` (account_name) VALUES (?)",
      [accountName],
    );
  }
};
