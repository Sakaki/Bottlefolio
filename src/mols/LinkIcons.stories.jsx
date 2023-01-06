import React from 'react';
import {LinkIcons} from "./LinkIcons";

export default {
    title: 'Molecules/LinkIcons',
    component: LinkIcons,
};

const Template = (args) => <LinkIcons {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
    pixivUrl: 'https://www.pixiv.net/users/52366365',
}
