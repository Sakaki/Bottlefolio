import React from 'react';
import {ExternalLinks} from "./ExternalLinks";

export default {
    title: 'Molecules/ExternalLinks',
    component: ExternalLinks,
};

const Template = (args) => <ExternalLinks {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
    links: {
        blog: '#',
        twitter: '#',
        pixiv: '#',
        skeb: '#',
        gitHub: '#',
    }
};
