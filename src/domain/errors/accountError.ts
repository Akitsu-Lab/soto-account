export class AccountNotFoundError extends Error {
  constructor() {
    super("Account not found");
    this.name = "AccountNotFoundError";
  }
}
export class DuplicateAccountError extends Error {
  constructor() {
    super("Duplicate account name");
    this.name = "DuplicateAccountError";
  }
}
