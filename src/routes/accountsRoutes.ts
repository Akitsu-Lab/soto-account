import { Hono } from "npm:hono";
import { AccountController } from "../controller/accountController.ts";
import { AccountService } from "../application/accountService.ts";
import { AccountRepositoryImpl } from "../infrastructure/repository/accountRepositoryImpl.ts";

const accountRepository = new AccountRepositoryImpl();
const accountService = new AccountService(accountRepository);
const accountController = new AccountController(accountService);

const accountsRoutes = new Hono();

accountsRoutes.get(
  "/",
  (c) => accountController.getAllAccountsHandler(c),
);

accountsRoutes.get(
  "/:accountId",
  (c) => accountController.getOneAccountHandler(c),
);

accountsRoutes.post(
  "/",
  (c) => accountController.addAccountHandler(c),
);

accountsRoutes.delete(
  "/:accountId",
  (c) => accountController.deleteAccountHandler(c),
);

export default accountsRoutes;
