import {Hono} from "npm:hono";
import {addAccountHandler, getAllAccountsHandler, getOneAccountHandler} from "../controller/account_controller.ts";

const accounts = new Hono();
accounts.get("/", getAllAccountsHandler);
accounts.get("/:account_id", getOneAccountHandler);
accounts.post("/", addAccountHandler);

export default accounts;
