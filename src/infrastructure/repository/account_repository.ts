import connection from "../../config/db.ts";

export const getAllAccountsDb = async () => {
  const [rows] = await connection.query("SELECT * FROM `accounts`");
  return rows;
};

export const addAccountDb = async (account_name: string) => {
  {
    await connection.query(
      "INSERT INTO `accounts` (account_name) VALUES (?)",
      [account_name],
    );
  }
};
