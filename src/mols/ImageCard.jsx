import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from "../atoms/Thumbnail";
import {ImageLinkIcon} from "../atoms/ImageLinkIcon";
import {Avatar, Card, Skeleton} from "antd";
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
            cover={<Thumbnail imageUrl={imageInfo.imageUrls.completed} alt={'image'}/>}
        >
            <Skeleton loading={imageInfo.title === 'Loading...'} avatar active>
                <Meta
                    avatar={<Avatar style={{backgroundColor: imageInfo.props.iconColor}}/>}
                    title={imageInfo.title}
                    description={imageInfo.subtitle}
                />
            </Skeleton>
        </ImageCardItem>
    );
};

ImageCard.propTypes = {
    imageInfo: PropTypes.object,
};

ImageCard.defaultProps = {
    imageInfo: {
        link: {
            twitterUrl: '#',
            pixivUrl: '#',
        },
        imageUrls: {
            completed: 'https://via.placeholder.com/720x1280',
            rough: '',
            line: '',
            timeLapse: ''
        },
        title: 'タイトル',
        subtitle: 'サブタイトル',
        props: {
            iconColor: 'pink',
        },
    },
};
