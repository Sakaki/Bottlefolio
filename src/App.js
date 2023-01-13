import React, {useEffect, useState} from "react";
import {PortalPage} from "./pages/PortalPage";
import {Helmet} from "react-helmet";
import {siteConfig} from "./config";

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
        fetch(siteConfig.imageInfosUrl, {cache: 'reload'})
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setImageInfos(result);
                },
            )
        fetch(siteConfig.userInfoUrl, {cache: 'reload'})
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
                <title></title>
                <meta name='twitter:card' content='summary_large_image'/>
                <meta name='twitter:site' content={siteConfig.meta.twitterSite}/>
                <meta name="twitter:creator" content={siteConfig.meta.twitterCreator}/>
                <meta name='og:url' content={siteConfig.meta.ogUrl}/>
                <meta name='og:title' content={siteConfig.meta.ogTitle}/>
                <meta name='og:description' content={siteConfig.meta.ogDescription}/>
                <meta name='og:image' content={siteConfig.meta.ogImage}/>
            </Helmet>
            <PortalPage userInfo={userInfo} imageInfos={imageInfos}/>
        </div>
    );
}

export default App;
