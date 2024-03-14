# 使い方

## サーバサイド、フロント共通

### ビルド

```bash
docker compose build --no-cache [back or front]
```

### 立ち上げ

```bash
docker compose up [back or front]
```

※ [back or front]の場所は、適宜適切な方に置き換え

## サーバサイド

### bundle installについて

ローカル環境で`bundle install`した場合、dockerコンテナには反映されないため、コンテナで実行した場合正常にインストールされてない状態になっている。

dockerコンテナに反映させるためには↓↓

```bash
docker compose run back bundle install
```

## フロントサイド

### npm installについて

`bundle install`と同様、ローカル環境で`npm install`してもdockerコンテナに反映されない。

dockerコンテナに反映させるためには↓↓

```bash
docker compose run front npm install
```

### APIサーバへの接続について

APIサーバのホスト名は環境変数で参照すること！

```javascript
const data = await fetch(`${process.env.API_HOST}/api/v1/test`);
```

envファイル名は「**.env.development.local**」にし、以下の内容を記述すること。

```text
API_HOST=http://localhost:3000
```
