import {Hono} from "npm:hono";
import {
    addAccountHandler,
    deleteAccountHandler,
    getAllAccountsHandler,
    getOneAccountHandler
} from "../controller/accountController.ts";

const accountsRoutes = new Hono();
accountsRoutes.get("/", getAllAccountsHandler);
accountsRoutes.get("/:accountId", getOneAccountHandler);
accountsRoutes.post("/", addAccountHandler);
accountsRoutes.delete("/:accountId", deleteAccountHandler);

export default accountsRoutes;
