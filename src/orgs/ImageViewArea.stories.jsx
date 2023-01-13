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
        subtitle: 'サブタイトル1',
        description: 'テスト1です！\nよろしくお願いします！！',
        props: {
            iconColor: 'pink',
        },
    },
    size: 10,
    currentIndex: 1,
    onChange: () => {
        console.log('dummy');
    },
    description: 'テストです！\nよろしくお願いします！！',
}
