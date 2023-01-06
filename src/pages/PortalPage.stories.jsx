import React from 'react';
import {PortalPage} from "./PortalPage";

export default {
    title: 'Pages/PortalPage',
    component: PortalPage,
}

const Template = (args) => <PortalPage {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    items: [
        {
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
        {
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
    ]
}
