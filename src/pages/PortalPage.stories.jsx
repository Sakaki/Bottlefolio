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
        name: 'ユーザー',
        description: 'ユーザー説明',
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
    },
    imageInfos: [
        {
            link: {
                twitterUrl: '#',
                pixivUrl: '#',
            },
            imageUrls: {
                completed: 'https://via.placeholder.com/720x1280',
                rough: 'https://via.placeholder.com/720x1280',
                line: 'https://via.placeholder.com/720x1280',
                timeLapse: 'https://via.placeholder.com/720x1280'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル1',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
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
            title: 'タイトル2',
            subtitle: 'サブタイトル2',
            description: 'テスト2です！\nよろしく\nお願いします！！',
            props: {
                iconColor: 'orange',
            },
        },
    ]
}
