import React, {useState} from 'react';
import {Thumbnail} from "../atoms/Thumbnail";
import PropTypes from "prop-types";
import {ImageViewArea} from "./ImageViewArea";
import {Button, Drawer} from "antd";

// TODO: 肥大化してるので分けたい
export const ThumbnailList = ({items}) => {
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    const showDrawer = (index) => {
        setOpen(true);
        setImageIndex(index);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            {items.map((item, index) => (
                <Button
                    type="link"
                    onClick={() => showDrawer(index)}
                    key={index.toString()}
                >
                    <Thumbnail
                        imageUrl={item.imageUrl}
                    />
                </Button>
            ))}
            <Drawer
                title='image'
                placement='bottom'
                onClose={onClose}
                open={open}
                height={'100%'}
                style={{maxWidth: 600}}
            >
                <ImageViewArea item={items[imageIndex]}/>
            </Drawer>
        </>
    )
};

ThumbnailList.propTypes = {
    items: PropTypes.array,
}

ThumbnailList.defaultProps = {
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
