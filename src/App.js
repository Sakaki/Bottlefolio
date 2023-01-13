import React, {useEffect, useState} from "react";
import {PortalPage} from "./pages/PortalPage";
import {Helmet} from "react-helmet";

const DefaultUserInfo = {
    name: 'Loading...',
    description: 'Loading...',
    links: {
        blog: '#',
        twitter: '#',
        pixiv: '#',
        skeb: '#',
        gitHub: '#',
    },
    header: {
        iconUrl: 'https://via.placeholder.com/128',
        backgroundUrl: 'https://via.placeholder.com/720x1280',
    }
};

const DefaultImageInfos = [
    {
        link: {
            twitterUrl: '#',
            pixivUrl: '#',
        },
        imageUrls: {
            completed: 'https://via.placeholder.com/720x1280',
            rough: '',
            line: '',
            timeLapse: ''
        },
        title: 'Loading...',
        subtitle: 'Loading...',
        description: 'Loading...',
        props: {
            iconColor: 'pink',
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
