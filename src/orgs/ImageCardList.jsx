import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ImageCard} from "../mols/ImageCard";
import {Drawer, Space} from 'antd';
import {ImageViewArea} from "./ImageViewArea";

export const ImageCardList = ({items}) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const showDrawer = (index) => {
        setOpen(true);
        setImageIndex(index);
    };

    const onClose = () => {
        setOpen(false);
    };

    const changeImageByPagination = (page) => {
        // pageはindexに対して1大きいので注意
        setImageIndex(page - 1);
    }

    return (
        <>
            <Space direction="vertical" size="large" style={{display: 'flex'}}>
                {items.map((item, index) => (
                    <div onClick={() => showDrawer(index)} key={index.toString()}>
                        <ImageCard
                            imageUrl={item.imageUrl}
                            pixivUrl={item.pixivUrl}
                            twitterUrl={item.twitterUrl}
                        />
                    </div>
                ))}
            </Space>
            <Drawer
                title='image'
                placement='bottom'
                onClose={onClose}
                open={open}
                height={'100%'}
            >
                <ImageViewArea
                    item={items[imageIndex]}
                    currentIndex={imageIndex + 1}
                    size={items.length}
                    onChange={changeImageByPagination}
                />
            </Drawer>
        </>
    );
};

ImageCardList.propTypes = {
    items: PropTypes.array,
}

ImageCardList.defaultProps = {
    items: [
        {
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
        {
            imageUrl: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
            twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
            pixivUrl: 'https://www.pixiv.net/users/52366365',
        },
    ]
}
