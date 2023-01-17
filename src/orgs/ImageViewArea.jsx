import React from 'react';
import PropTypes from 'prop-types';
import {Title} from "../mols/Title";
import {Description} from "../mols/Description";
import {LinkIcons} from "../mols/LinkIcons";
import {Pagination, Space} from "antd";
import styled from "styled-components";
import {ImageTabs} from "../mols/ImageTabs/ImageTabs";

const DetailContainer = styled(Space)`
  display: flex;
  max-width: 600px;
  margin: auto;
`

export const ImageViewArea = ({
                                  imageInfo,
                                  size,
                                  currentIndex,
                                  currentTabKey,
                                  onPaginationChanged,
                                  onTabKeyChanged,
                                  description
                              }) => {
    return (
        <>
            <DetailContainer direction="vertical" size="middle">
                <div style={{textAlign: 'center'}}>
                    <Pagination
                        showSizeChanger={false}
                        current={currentIndex}
                        total={size}
                        onChange={onPaginationChanged}
                        pageSize={1}
                    />
                </div>
                <ImageTabs imageInfo={imageInfo} currentTabKey={currentTabKey} onTabKeyChanged={onTabKeyChanged}/>
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
            twitterUrl: '#',
            pixivUrl: '#',
        },
        imageUrls: {
            completed: 'https://via.placeholder.com/720x1280',
            rough: '',
            line: '',
            timeLapse: ''
        },
        title: 'タイトル1',
        subtitle: 'サブタイトル1',
        description: 'テスト1です！\nよろしくお願いします！！',
        props: {
            iconColor: 'pink',
        },
    },
    size: 10,
    currentIndex: 1,
    description: 'テストです！\nよろしくお願いします！！',
}
