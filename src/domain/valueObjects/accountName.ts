export class AccountName {
  private readonly _value: string;
  constructor(value: string) {
    this._value = value;
  }

  // Getter
  get value(): string {
    return this._value;
  }
}
