import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {ImageCard} from "../mols/ImageCard";
import {Space} from 'antd';
import {SetImageIndexContext, SetShowDrawerContext, SetTabKeyContext} from "./ContentsContext";

export const ImageCardList = ({imageInfos}) => {
    const setOpen = useContext(SetShowDrawerContext);
    const setTabKey = useContext(SetTabKeyContext);
    const setImageIndex = useContext(SetImageIndexContext);

    const onImageCardClicked = (index) => {
        setOpen(true);
        setImageIndex(index);
        setTabKey('1');
    };

    return (
        <>
            <Space direction="vertical" size="large" style={{display: 'flex'}}>
                {imageInfos.map((item, index) => (
                    <div onClick={() => onImageCardClicked(index)} key={index.toString()}>
                        <ImageCard imageInfo={item}/>
                    </div>
                ))}
            </Space>
        </>
    );
};

ImageCardList.propTypes = {
    imageInfos: PropTypes.array,
}

ImageCardList.defaultProps = {
    imageInfos: [
        {
            link: {
                twitterUrl: '#',
                pixivUrl: '#',
            },
            imageUrls: {
                completed: 'https://via.placeholder.com/720x1280',
                rough: 'https://via.placeholder.com/720x1280',
                line: 'https://via.placeholder.com/720x1280',
                timeLapse: 'https://via.placeholder.com/720x1280'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル1',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
        {
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
            title: 'タイトル2',
            subtitle: 'サブタイトル2',
            description: 'テスト2です！\nよろしく\nお願いします！！',
            props: {
                iconColor: 'orange',
            },
        },
    ]
}
