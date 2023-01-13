import React from 'react';
import {Header} from "./Header";

export default {
    title: 'Molecules/Header',
    component: Header,
}

const Template = (args) => <Header {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    backgroundUrl: 'https://via.placeholder.com/720x1280',
    iconUrl: 'https://via.placeholder.com/128/f0f8ff',
}
