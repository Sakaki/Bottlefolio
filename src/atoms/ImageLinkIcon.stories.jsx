import React from 'react';
import {ImageLinkIcon} from './ImageLinkIcon';
import PixivIcon from '../assets/icon/pixiv_icon.svg';
import TwitterIcon from '../assets/icon/twitter_icon.svg';

export default {
    title: 'Atoms/ImageLinkIcon',
    component: ImageLinkIcon,
};

const Template = (args) => <ImageLinkIcon {...args} />;

export const TwitterIconSample = Template.bind({});
TwitterIconSample.args = {
    url: 'https://twitter.com/Sakaki333/status/1599055861573353472',
    svgIcon: TwitterIcon,
    alt: 'Twitter',
};

export const PixivIconSample = Template.bind({});
PixivIconSample.args = {
    url: 'https://www.pixiv.net/users/52366365',
    svgIcon: PixivIcon,
    alt: 'Pixiv',
}
