import connection from "../../config/db.ts";

export const getAccounts = async () => {
    const [rows] = await connection.query("SELECT * FROM `accounts`");
    return rows;
};
