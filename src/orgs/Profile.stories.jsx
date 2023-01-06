import React from 'react';
import {Profile} from "./Profile";

export default {
    title: 'Organisms/Profile',
    component: Profile,
}

const Template = (args) => <Profile {...args} />;

export const Example1 = Template.bind({});
