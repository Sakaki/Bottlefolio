import React from 'react';
import {Image} from "./Image";

export default {
    title: 'Atoms/Image',
    component: Image,
};

const Template = (args) => <Image {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    imageUrl: 'https://via.placeholder.com/720x1280'
};
