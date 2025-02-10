import {Hono} from "npm:hono";
import {addAccountHandler, getAllAccountsHandler, getOneAccountHandler} from "../controller/account-controller.ts";

const accountsRoutes = new Hono();
accountsRoutes.get("/", getAllAccountsHandler);
accountsRoutes.get("/:account_id", getOneAccountHandler);
accountsRoutes.post("/", addAccountHandler);

export default accountsRoutes;
