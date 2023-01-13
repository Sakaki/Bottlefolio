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
            twitterUrl: '#',
            pixivUrl: '#',
        },
        imageUrls: {
            completed: 'https://via.placeholder.com/720x1280',
            rough: '',
            line: '',
            timeLapse: ''
        },
        title: 'タイトル',
        subtitle: 'サブタイトル',
        props: {
            iconColor: 'pink',
        },
    },
};
