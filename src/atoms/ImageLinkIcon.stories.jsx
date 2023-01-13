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
    url: '#',
    svgIcon: TwitterIcon,
    alt: 'Twitter',
};

export const PixivIconSample = Template.bind({});
PixivIconSample.args = {
    url: '#',
    svgIcon: PixivIcon,
    alt: 'Pixiv',
}
