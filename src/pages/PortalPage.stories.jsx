import React from 'react';
import {PortalPage} from "./PortalPage";

export default {
    title: 'Pages/PortalPage',
    component: PortalPage,
}

const Template = (args) => <PortalPage {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    userInfo: {
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
            backgroundUrl: 'https://sakaki333.sakura.ne.jp/resources/images/cocoa_6.png',
        }
    },
    imageInfos: [
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.jpg',
                rough: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101r.jpg',
                line: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101l.jpg',
                timeLapse: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.gif'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル2',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
                rough: '',
                line: '',
                timeLapse: ''
            },
            title: 'タイトル2',
            subtitle: 'サブタイトル2',
            description: 'テスト2です！\nよろしく\nお願いします！！',
            props: {
                iconColor: 'orange',
            },
        },
    ]
}
