import React from 'react';

import {ImageCard} from "./ImageCard";

export default {
    title: 'Molecules/ImageCard',
    component: ImageCard,
};

const Template = (args) => <ImageCard {...args} />;

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
        title: 'タイトル',
        subtitle: 'サブタイトル',
        props: {
            iconColor: 'pink',
        },
    },
};
