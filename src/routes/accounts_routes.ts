import {Hono} from "npm:hono";
import {addAccountHandler, getAllAccountsHandler, getOneAccountHandler} from "../controller/account_controller.ts";

const accounts_routes = new Hono();
accounts_routes.get("/", getAllAccountsHandler);
accounts_routes.get("/:account_id", getOneAccountHandler);
accounts_routes.post("/", addAccountHandler);

export default accounts_routes;
