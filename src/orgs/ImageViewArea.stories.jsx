import React from 'react';
import {ImageViewArea} from "./ImageViewArea";

export default {
    title: 'Organisms/ImageViewArea',
    component: ImageViewArea,
};

const Template = (args) => <ImageViewArea {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    imageInfo: {
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
    size: 1,
    currentIndex: 1,
    onChange: () => {
        console.log('dummy');
    },
    description: 'テストです！\nよろしくお願いします！！',
}
