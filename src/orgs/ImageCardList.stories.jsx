import React from 'react';
import {ImageCardList} from "./ImageCardList";

export default {
    title: 'Organisms/ImageCardList',
    component: ImageCardList,
}

const Template = (args) => <ImageCardList {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
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
            subtitle: 'サブタイトル2',
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
