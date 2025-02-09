import {Hono} from "npm:hono";
import {addAccountHandler, getAllAccountsHandler} from "../controller/account_controller.ts";

const accounts = new Hono();
accounts.get("/", getAllAccountsHandler);
accounts.post("/", addAccountHandler);

export default accounts;
