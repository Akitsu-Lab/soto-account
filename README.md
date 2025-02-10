# soto-account

## 前準備

### envファイル作成

- local用
```shell
vim .env.local
```
```
DB_HOST="localhost"
DB_USER="<ユーザー名>"
DB_PASS="<パスワード>"
DB_SCHEMA="soto"
```
- dev用
```shell
vim .env.dev
```

## 実行
```shell
# ローカル実行
deno run --env-file=.env.local -A ./src/main.ts
```
```shell
# dev実行
deno run --env-file=.env.dev -A ./src/main.ts
```

## コンパイル
```shell
# linux用バイナリ作成
deno compile --output target/soto-account --target x86_64-unknown-linux-gnu --env-file=.env.local -A ./src/main.ts
```

## 参考

- [How to use MySQL2 with Deno](https://docs.deno.com/examples/mysql2_tutorial/)
- [Hono](https://hono-ja.pages.dev/docs/getting-started/deno)
- [Deno env](https://docs.deno.com/runtime/reference/env_variables/)
