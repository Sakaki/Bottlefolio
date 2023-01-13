import React, {useState} from 'react';
import {Thumbnail} from "../atoms/Thumbnail";
import PropTypes from "prop-types";
import {ImageViewArea} from "./ImageViewArea";
import {Button, Drawer} from "antd";
import {ImageCardList} from "./ImageCardList";

// TODO: 肥大化してるので分けたい
export const ThumbnailList = ({imageInfos}) => {
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
            {imageInfos.map((item, index) => (
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
            >
                <ImageViewArea item={imageInfos[imageIndex]}/>
            </Drawer>
        </>
    )
};

ImageCardList.propTypes = {
    imageInfos: PropTypes.array,
}

ImageCardList.defaultProps = {
    imageInfos: [
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.jpg',
                rough: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101r.jpg',
                line: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101l.jpg',
                timeLapse: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.gif'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル2',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
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
