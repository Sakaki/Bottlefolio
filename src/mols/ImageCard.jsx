import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from "../atoms/Thumbnail";
import {ImageLinkIcon} from "../atoms/ImageLinkIcon";
import {Avatar, Card} from "antd";
import PixivIcon from '../assets/icon/pixiv_icon.svg'
import TwitterIcon from '../assets/icon/twitter_icon.svg'
import Meta from "antd/es/card/Meta";

export const ImageCard = ({twitterUrl, pixivUrl, imageUrl}) => {
    return (
        <Card
            hoverable
            style={{width: 300, margin: 5, display: 'inline-block'}}
            actions={[
                <ImageLinkIcon
                    svgIcon={TwitterIcon}
                    url={twitterUrl}
                    alt={'Twitter'}
                />,
                <ImageLinkIcon
                    svgIcon={PixivIcon}
                    url={pixivUrl}
                    alt={'Pixiv'}
                />
            ]}

            cover={<Thumbnail imageUrl={imageUrl}/>}

        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
            />
        </Card>
    );
};

ImageCard.propTypes = {
    imageUrl: PropTypes.string,
    twitterUrl: PropTypes.string,
    pixivUrl: PropTypes.string,
};

ImageCard.defaultProps = {
    twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
    pixivUrl: 'https://www.pixiv.net/users/52366365',
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
};
