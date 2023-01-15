import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ImageCard} from "../mols/ImageCard";
import {Drawer, Space} from 'antd';
import {ImageViewArea} from "./ImageViewArea";

export const ImageCardList = ({imageInfos}) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [currentTabKey, setCurrentTabKey] = useState('1');

    const showDrawer = (index) => {
        setOpen(true);
        setImageIndex(index);
        setCurrentTabKey('1');
    };

    const onClose = () => {
        setOpen(false);
    };

    const changeImageByPagination = (page) => {
        // pageはindexに対して1大きいので注意
        setImageIndex(page - 1);
        setCurrentTabKey('1');
    }

    const onTabKeyChanged = (activeKey) => {
        setCurrentTabKey(activeKey);
    }

    return (
        <>
            <Space direction="vertical" size="large" style={{display: 'flex'}}>
                {imageInfos.map((item, index) => (
                    <div onClick={() => showDrawer(index)} key={index.toString()}>
                        <ImageCard
                            imageInfo={item}
                        />
                    </div>
                ))}
            </Space>
            <Drawer
                title={imageInfos[imageIndex].title}
                placement='bottom'
                onClose={onClose}
                open={open}
                height={'100%'}
            >
                <ImageViewArea
                    imageInfo={imageInfos[imageIndex]}
                    currentIndex={imageIndex + 1}
                    currentTabKey={currentTabKey}
                    size={imageInfos.length}
                    onPaginationChanged={changeImageByPagination}
                    onTabKeyChanged={onTabKeyChanged}
                    description={imageInfos[imageIndex].description}
                />
            </Drawer>
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
