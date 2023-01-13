# Bottlefolio

イラスト向けのシンプルなポータルサイトジェネレーターです。  
コンパイルしたものをwebサーバーに置くだけで動くため、さくら等のホスティングサービスに置くだけで公開できます。

Twitterのモーメントの代わりになればと思い開発してみました。

[サンプルサイト](https://sakaki333.sakura.ne.jp)

## 🚅 Quick start

1. **imageInfos.jsonの配置**

    サーバーに`imageInfos.json`を配置してください（[サンプル](https://sakaki333.sakura.ne.jp/resources/json/imageInfos.json)）。  
    TwitterやPixivなどのIDを持っていない場合はリンク部は`#`を指定すればOKです。

    ```json
    [
        {
            "link": {
                "twitterUrl": "TwitterのリンクURL",
                "pixivUrl": "PixivのリンクURL"
            },
            "imageUrls": {
                "completed": "完成画像のURL",
                "rough": "ラフのURL（無い場合は空でOK）",
                "line": "線画のURL（無い場合は空でOK）",
                "timeLapse": "タイムラプスgifのURL（無い場合は空でOK）"
            },
            "title": "タイトル",
            "subtitle": "サブタイトル",
            "description": "説明（改行は\nで行えます）",
            "props": {
                "iconColor": "テーマカラー（pinkや#fffなどのCSS値が使用可能です）"
            }
        },
        ...
    ]
    ```

2. **userInfo.jsonの配置**

   サーバーに`userInfos.json`を配置してください（[サンプル](https://sakaki333.sakura.ne.jp/resources/json/userInfo.json)）。

    ```json
    {
        "name": "ユーザー名",
        "description": "自己紹介文",
        "links": {
            "blog": "ブログのURL",
            "twitter": "TwitterのURL",
            "pixiv": "PixivのURL",
            "skeb": "SkebのURL",
            "gitHub": "GitHubのURL"
        },
        "header": {
            "iconUrl": "https://sakaki333.sakura.ne.jp/resources/profile/icon.jpg",
            "backgroundUrl": "https://sakaki333.sakura.ne.jp/resources/images/cocoa_6.png"
        },
        "meta": {
            "domain": "sakaki333.sakura.ne.jp",
            "title": "イラスト描いたやつ",
            "description": "ごちうさが好きすぎてイラストを始めた人間の顛末。よければ見てやってください。",
            "image": "https://sakaki333.sakura.ne.jp/resources/profile/icon.jpg"
        }
    }
    ```

3. **[config.js](./src/config.js)を編集**

    リポジトリ内の`config.js`を編集してください。

    ```js
    export const siteConfig = {
        imageInfosUrl: 'imageInfos.jsonの配置URL',
        userInfoUrl: 'userInfo.jsonの配置URL',
        meta: {
            title: 'サイトのタイトル',
            twitterSite: 'Twitter ID',
            twitterCreator: 'Twitter ID',
            ogUrl: 'サイトのURL',
            ogTitle: 'SNS共有時のタイトル',
            ogDescription: 'SNS共有時の説明',
            ogImage: 'SNS共有時のサムネ',
        }
    }
    ```

4. **ビルドしてファイルを配置**

    ```shell
    yarn build
    ```

    `build`ディレクトリ配下に生成されたファイルをサーバーに配置してください。

## ライセンス

本リポジトリはGPLv3で公開されていますが、[src/assets/icon](src/assets/icon)配下のディレクトリのPixivアイコンおよびTwitterアイコン等はそれぞれの利用規約に準拠してください。

* [Twitterアイコンの利用について](https://about.twitter.com/en/who-we-are/brand-toolkit)
* [Pixivアイコンの利用について](https://www.pixiv.co.jp/news/press-kit/)

他にも明確に当リポジトリの生成物でないものはそれぞれの利用規約に準拠します。

Copyright Sakaki Mirai 2023
