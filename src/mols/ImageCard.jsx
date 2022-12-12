import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "../atoms/Image";
import {ImageLinkIcon} from "../atoms/ImageLinkIcon";
import {Card} from "antd";
import {TwitterOutlined} from "@ant-design/icons";
import PixivIcon from '../assets/icon/pixiv_icon.svg'
import TwitterIcon from '../assets/icon/twitter_icon.svg'

export const ImageCard = ({imageUrl, ...props}) => {
    return (
        <Card
            hoverable
            style={{width: 300, marginTop: 0}}
            actions={[
                <ImageLinkIcon
                    svgIcon={TwitterIcon}
                    url={'https://twitter.com/Sakaki333/status/1599055861573353472'}
                    alt={'Twitter'}
                />,
                <ImageLinkIcon
                    svgIcon={PixivIcon}
                    url={'https://twitter.com/Sakaki333/status/1599055861573353472'}
                    alt={'Twitter'}
                />
            ]}
            cover={<Image imageUrl={imageUrl}/>}
            bodyStyle={{padding: "0"}}
        />
    );
};

ImageCard.propTypes = {
    imageUrl: PropTypes.string,
};

ImageCard.defaultProps = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
};
