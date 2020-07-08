# Web APIのモック

## 起動

``` cmd
npm start
```

## コンテンツ配置

URLに相当するファイルを配置する。  
この時ファイル名に拡張子は不要。
  
例）  
リクエスト：

``` http
http://localhost:8081/auth/login
```

レスポンス：./auth/loginの内容

``` json
{
    "token": "qwertyuiopasdfghjklzxcvbnm1234"
}
```
