export class AccountName {
  private readonly _value: string;
  constructor(value: string) {
    // 空文字のみの場合、エラーにする
    if (value.trim() === "") {
      throw new Error("AccountName cannot be empty.");
    } else {
      // 前後の空文字を削除する
      this._value = value.trim();
    }
  }

  // Getter
  get value(): string {
    return this._value;
  }
}
