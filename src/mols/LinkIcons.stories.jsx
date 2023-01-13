import React from 'react';
import {LinkIcons} from "./LinkIcons";

export default {
    title: 'Molecules/LinkIcons',
    component: LinkIcons,
};

const Template = (args) => <LinkIcons {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    twitterUrl: '#',
    pixivUrl: '#',
}
