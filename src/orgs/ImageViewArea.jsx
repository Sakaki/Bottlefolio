import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "../atoms/Image";
import {Title} from "../mols/Title";
import {Description} from "../mols/Description";
import {LinkIcons} from "../mols/LinkIcons";
import {Pagination, Space, Tabs} from "antd";
import styled from "styled-components";

const DetailContainer = styled(Space)`
  display: flex;
  max-width: 600px;
  margin: auto;
`

export const ImageViewArea = ({imageInfo, size, currentIndex, onChange, description}) => {
    const items = [
        {
            key: '1',
            label: `イラスト`,
            children: <Image imageUrl={imageInfo.imageUrls.completed}/>,
        },
        {
            key: '2',
            label: `タイムラプス`,
            children: <Image imageUrl={imageInfo.imageUrls.timeLapse}/>,
            disabled: imageInfo.imageUrls.timeLapse === '',
        },
        {
            key: '3',
            label: `ラフ`,
            children: <Image imageUrl={imageInfo.imageUrls.rough}/>,
            disabled: imageInfo.imageUrls.rough === '',
        },
        {
            key: '4',
            label: `線画`,
            children: <Image imageUrl={imageInfo.imageUrls.line}/>,
            disabled: imageInfo.imageUrls.line === '',
        },
    ];

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
                <Tabs type="card" defaultActiveKey="1" items={items}/>
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
    onChange: () => {
        console.log('dummy');
    },
    description: 'テストです！\nよろしくお願いします！！',
}
