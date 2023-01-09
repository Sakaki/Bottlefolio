import React, {useEffect, useState} from "react";
import {PortalPage} from "./pages/PortalPage";
import {Helmet} from "react-helmet";

const DefaultUserInfo = {
    name: 'ユーザー名',
    description: 'ユーザー説明',
    links: {
        blog: '#',
        twitter: '#',
        pixiv: '#',
        skeb: '#',
        gitHub: '#',
    },
    header: {
        iconUrl: 'https://blog.sakaki333.com/media/images/23/01/07/-pjp6ww.jpg',
        backgroundUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    },
    meta: {
        domain: "",
        title: "",
        description: "",
        image: "",
    },
};

const DefaultImageInfos = [
    {
        "link": {
            "twitterUrl": "https://twitter.com/Sakaki333/status/1599055861573353472",
            "pixivUrl": "https://www.pixiv.net/users/52366365"
        },
        "imageUrl": "https://sakaki333.sakura.ne.jp/resources/images/cocoa_20221213.png",
        "title": "イマドキ女子ココアちゃん",
        "subtitle": "ご注文はうさぎですか？",
        "description": "テスト1です！\nよろしくお願いします！！",
        "props": {
            "iconColor": "pink",
        },
    },
]

function App() {
    const [userInfo, setUserInfo] = useState(DefaultUserInfo);
    const [imageInfos, setImageInfos] = useState(DefaultImageInfos);

    useEffect(() => {
        fetch('https://sakaki333.sakura.ne.jp/resources/json/imageInfos.json', {cache: 'reload'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setImageInfos(result);
                },
            )
        fetch('https://sakaki333.sakura.ne.jp/resources/json/userInfo.json', {cache: 'reload'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setUserInfo(result);
                },
            )
    }, [setImageInfos, setUserInfo]);

    return (
        <div className="App">
            <Helmet>
                <meta charSet="UTF-8"/>
                <title>イラスト描いたやつ</title>
                <meta name='twitter:card' content='summary_large_image'/>
                <meta name='twitter:site' content='@Sakaki333'/>
                <meta name="twitter:creator" content="@Sakaki333"/>
                <meta name='og:url' content='https://sakaki333.sakura.ne.jp'/>
                <meta name='og:title' content='Illustrations'/>
                <meta name='og:description' content='Drawn by @Sakaki333'/>
                <meta name='og:image' content='https://sakaki333.sakura.ne.jp/resources/profile/ogp_icon.jpg'/>
            </Helmet>
            <PortalPage userInfo={userInfo} imageInfos={imageInfos}/>
        </div>
    );
}

export default App;
