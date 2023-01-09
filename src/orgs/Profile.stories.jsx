import React from 'react';
import {Profile} from "./Profile";

export default {
    title: 'Organisms/Profile',
    component: Profile,
}

const Template = (args) => <Profile {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    userInfo: {
        name: 'ユーザー',
        description: 'テスト説明です。\n改行することもできます！',
        links: {
            blog: '#',
            twitter: '#',
            pixiv: '#',
            skeb: '#',
            gitHub: '#',
        }
    }
}
