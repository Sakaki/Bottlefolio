import React from 'react';
import PropTypes from 'prop-types';
import {ImageCard} from "../mols/ImageCard";
import {Image} from 'antd';

export const ImageCardList = ({cards}) => {
    return (
        <>
            <Image.PreviewGroup>
                {cards.map((item, index) => (
                    <ImageCard
                        imageUrl={item.imageUrl}
                        pixivUrl={item.pixivUrl}
                        twitterUrl={item.twitterUrl}
                        key={index.toString()}
                    />
                ))}
            </Image.PreviewGroup>
        </>
    );
};

ImageCardList.propTypes = {
    cards: PropTypes.array,
}

ImageCardList.defaultProps = {
    cards: [
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