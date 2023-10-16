import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from "../atoms/Thumbnail";
import {Card} from "antd";
import styled from "styled-components";

const ImageCardItem = styled(Card)`
  margin: auto;
  max-width: 550px;
  box-shadow: 3px 3px 18px 3px rgba(208, 216, 243, 0.8);
  padding: 0;
`

const imageKeyRefs = [
    {
        refName: 'completed',
        text: 'イラスト',
    },
    {
        refName: 'line',
        text: '線画',
    },
    {
        refName: 'rough',
        text: 'ラフ',
    },
    {
        refName: 'timeLapse',
        text: 'タイムラプス',
    },
]

export const ImageCard = ({imageInfo}) => {
    const [activeTabKey1, setActiveTabKey1] = useState('completed');
    const contentList = {
        completed: <Thumbnail imageUrl={imageInfo.imageUrls.completed} alt={'image'}/>,
        rough: <Thumbnail imageUrl={imageInfo.imageUrls.rough} alt={'image'}/>,
        line: <Thumbnail imageUrl={imageInfo.imageUrls.line} alt={'image'}/>,
        timeLapse: <Thumbnail imageUrl={imageInfo.imageUrls.timeLapse} alt={'image'}/>,
    };
    const visibleItems = imageKeyRefs.filter((refItem) => imageInfo.imageUrls[refItem.refName] !== '');
    const tabList = visibleItems.map((refItem, index) => {
        return {
            key: refItem.refName,
            tab: refItem.text,
        }
    });

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    };

    return (
        <ImageCardItem
            tabList={tabList}
            activeTabKey={activeTabKey1}
            onTabChange={onTab1Change}
            bodyStyle={{marginBottom: "-8px", padding: "0"}}
            tabProps={{
                size: 'middle',
            }}
        >
            {contentList[activeTabKey1]}
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
            rough: 'https://via.placeholder.com/720x1080',
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
