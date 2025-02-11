export class AccountDto {
    accountId: number;
    accountName: string;
    balance: number;

    constructor(accountId: number, accountName: string, balance: number) {
        this.accountId = accountId;
        this.accountName = accountName;
        this.balance = balance;
    }
}
