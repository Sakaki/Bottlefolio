import React from 'react';
import {Description} from "./Description";

export default {
    title: 'Molecules/Description',
    component: Description,
};

const Template = (args) => <Description {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    text: 'テストです！\nよろしくお願いします！！',
};
