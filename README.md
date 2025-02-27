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
deno compile --output target/soto-account --target x86_64-unknown-linux-gnu --env-file=.env.dev -A ./src/main.ts
```

## deno deploy

[ダッシュボード](https://dash.deno.com/projects/soto-account)

## 参考

- MySQL
  - [How to use MySQL2 with Deno](https://docs.deno.com/examples/mysql2_tutorial/)
  - [node-mysql2](https://sidorares.github.io/node-mysql2/docs/examples)
  - [How to handle errors?](https://sidorares.github.io/node-mysql2/docs/faq/how-to-handle-errors)
- Hono
  - [Hono](https://hono-ja.pages.dev/docs/getting-started/deno)
- Logger
  - [Logger Middleware](https://hono.dev/docs/middleware/builtin/logger)
- Deno
  - [Deno env](https://docs.deno.com/runtime/reference/env_variables/)
- 設計
  - [レイヤードアーキテクチャで作る](https://zenn.dev/flutteruniv/books/flutter-architecture/viewer/5_layered-architecture)
  - [お前らがModelと呼ぶアレをなんと呼ぶべきか。近辺の用語(EntityとかVOとかDTOとか)について整理しつつ考える](https://qiita.com/takasek/items/70ab5a61756ee620aee6)
- スタイルガイド（コーディング規約）
  - [スタイルガイド（コーディング規約）](https://typescript-jp.gitbook.io/deep-dive/styleguide)
- webstormで`deno fmt`を自動で行う
  - [Quick Tip: Deno Fmt in WebStorm](https://levelup.gitconnected.com/quick-tip-deno-fmt-in-webstorm-aa3e6d3b034d)
