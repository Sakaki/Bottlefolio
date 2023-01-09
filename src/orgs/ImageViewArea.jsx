import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "../atoms/Image";
import {Title} from "../mols/Title";
import {Description} from "../mols/Description";
import {LinkIcons} from "../mols/LinkIcons";
import {Pagination, Space} from "antd";
import styled from "styled-components";

const DetailContainer = styled(Space)`
  display: flex;
  max-width: 600px;
  margin: auto;
`

export const ImageViewArea = ({imageInfo, size, currentIndex, onChange, description}) => {
    return (
        <>
            <DetailContainer direction="vertical" size="middle">
                <div style={{textAlign: 'center'}}>
                    <Pagination
                        showSizeChanger={false}
                        current={currentIndex}
                        total={size}
                        onChange={onChange}
                        pageSize={1}
                    />
                </div>
                <Image imageUrl={imageInfo.imageUrl}/>
                <Title title={imageInfo.title} subtitle={imageInfo.subtitle} iconColor={imageInfo.props.iconColor}/>
                <Description text={description}/>
                <LinkIcons
                    pixivUrl={imageInfo.link.pixivUrl}
                    twitterUrl={imageInfo.link.twitterUrl}
                />
            </DetailContainer>
        </>
    )
};

ImageViewArea.propTypes = {
    imageInfo: PropTypes.object,
    size: PropTypes.number,
    currentIndex: PropTypes.number,
    onChange: PropTypes.func,
    description: PropTypes.string,
}

ImageViewArea.defaultProps = {
    imageInfo: {
        link: {
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
        imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
        title: 'タイトル1',
        subtitle: 'サブタイトル2',
        description: 'テスト1です！\nよろしくお願いします！！',
        props: {
            iconColor: 'pink',
        },
    },
    size: 10,
    currentIndex: 1,
    onChange: () => {
        console.log('dummy');
    },
    description: 'テストです！\nよろしくお願いします！！',
}
