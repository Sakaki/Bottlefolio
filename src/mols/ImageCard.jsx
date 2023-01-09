import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from "../atoms/Thumbnail";
import {ImageLinkIcon} from "../atoms/ImageLinkIcon";
import {Avatar, Card} from "antd";
import PixivIcon from '../assets/icon/pixiv_icon.svg'
import TwitterIcon from '../assets/icon/twitter_icon.svg'
import Meta from "antd/es/card/Meta";
import styled from "styled-components";

const ImageCardItem = styled(Card)`
  margin: auto;
  max-width: 550px;
`

export const ImageCard = ({imageInfo}) => {
    return (
        <ImageCardItem
            hoverable
            actions={[
                <ImageLinkIcon
                    svgIcon={TwitterIcon}
                    url={imageInfo.link.twitterUrl}
                    alt={'Twitter'}
                />,
                <ImageLinkIcon
                    svgIcon={PixivIcon}
                    url={imageInfo.link.pixivUrl}
                    alt={'Pixiv'}
                />
            ]}
            cover={<Thumbnail imageUrl={imageInfo.imageUrl}/>}
        >
            <Meta
                avatar={<Avatar style={{backgroundColor: imageInfo.props.iconColor}}/>}
                title={imageInfo.title}
                description={imageInfo.subtitle}
            />
        </ImageCardItem>
    );
};

ImageCard.propTypes = {
    imageInfo: PropTypes.object,
};

ImageCard.defaultProps = {
    imageInfo: {
        link: {
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
        imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
        title: 'タイトル',
        subtitle: 'サブタイトル',
        props: {
            iconColor: 'pink',
        },
    },
};
