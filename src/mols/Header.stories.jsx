import React from 'react';
import {Header} from "./Header";

export default {
    title: 'Molecules/Header',
    component: Header,
}

const Template = (args) => <Header {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    backgroundUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    iconUrl: 'https://blog.sakaki333.com/media/images/23/01/07/-pjp6ww.jpg',
}
