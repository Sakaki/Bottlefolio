import React from 'react';
import {ImageViewArea} from "./ImageViewArea";

export default {
    title: 'Organisms/ImageViewArea',
    component: ImageViewArea,
};

const Template = (args) => <ImageViewArea {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    item: {
        twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
        pixivUrl: 'https://www.pixiv.net/users/52366365',
    },
    size: 10,
    currentIndex: 1,
    onChange: () => {
        console.log('dummy');
    }
}
