import React from 'react';

import {ImageCard} from "./ImageCard";

export default {
    title: 'Molecules/ImageCard',
    component: ImageCard,
};

const Template = (args) => <ImageCard {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png'
};
