import React from 'react';
import {ExternalLink} from "./ExternalLink";
import {HomeOutlined} from "@ant-design/icons";

export default {
    title: 'Atoms/ExternalLink',
    component: ExternalLink,
}

const Template = (args) => <ExternalLink {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    url: 'https://blog.sakaki333.com',
    backgroundColor: '#f56a00',
    icon: undefined,
    iconChar: 'U',
    text: 'Blog'
}

export const Example2 = Template.bind({});
Example2.args = {
    url: 'https://blog.sakaki333.com',
    backgroundColor: '#f56a00',
    icon: <HomeOutlined/>,
    iconChar: '',
    text: 'Blog'
}
