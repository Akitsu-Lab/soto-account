export class Balance {
  private readonly _value: number;
  constructor(value: number) {
    this._value = value;
  }

  // Getter
  get value(): number {
    return this._value;
  }
}
