import React from 'react';
import {Thumbnail} from "./Thumbnail";

export default {
    title: 'Atoms/Thumbnail',
    component: Thumbnail,
};

const Template = (args) => <Thumbnail {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    imageUrl: 'https://via.placeholder.com/720x1280',
    alt: 'image',
};
