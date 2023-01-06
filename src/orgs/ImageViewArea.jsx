import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "../atoms/Image";
import {Title} from "../mols/Title";
import {Description} from "../mols/Description";
import {LinkIcons} from "../mols/LinkIcons";

export const ImageViewArea = ({item}) => {
    return (
        <>
            <Image imageUrl={item.imageUrl}/>
            <Title/>
            <Description/>
            <LinkIcons
                pixivUrl={item.pixivUrl}
                twitterUrl={item.twitterUrl}
            />
        </>
    )
};

ImageViewArea.propTypes = {
    item: PropTypes.object,
}

ImageViewArea.defaultProps = {
    item: {
        twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
        pixivUrl: 'https://www.pixiv.net/users/52366365',
    }
}
