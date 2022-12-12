import React from 'react';
import { ImageLinkIcon } from "./ImageLinkIcon";
import Icon, { TwitterOutlined } from "@ant-design/icons";
import { ReactComponent as PixivIcon } from '../assets/icon/pixiv_icon.svg'

export default {
    title: 'Atoms/ImageLinkIcon',
    component: ImageLinkIcon,
};

const Template = (args) => <ImageLinkIcon {...args} />;

export const TwitterIconSample = Template.bind({});
TwitterIconSample.args = {
    url: 'https://twitter.com/Sakaki333/status/1599055861573353472',
    iconType: <TwitterOutlined />,
    toolTip: 'Twitter'
};

export const PixivIconSample = Template.bind({});
PixivIconSample.args = {
    url: '',
    iconType: <PixivIcon style={{
        transform: "scale(0.5)",
    }} />,
    toolTip: 'Pixiv',
}
