import React from 'react';
import {Title} from "./Title";

export default {
    title: 'Molecules/Title',
    component: Title,
};

const Template = (args) => <Title {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    title: 'タイトル',
    subtitle: 'サブタイトル',
    iconColor: 'pink',
}
