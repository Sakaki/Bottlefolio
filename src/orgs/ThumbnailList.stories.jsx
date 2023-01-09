import React from 'react';
import {ThumbnailList} from "./ThumbnailList";

export default {
    title: 'Organisms/ThumbnailList',
    component: ThumbnailList,
}

const Template = (args) => <ThumbnailList {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    imageInfos: [
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
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
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
            title: 'タイトル2',
            subtitle: 'サブタイトル2',
            description: 'テスト2です！\nよろしく\nお願いします！！',
            props: {
                iconColor: 'orange',
            },
        },
    ]
}
