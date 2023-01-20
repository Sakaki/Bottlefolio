import React, {useContext} from 'react';
import {ImageViewArea} from "./ImageViewArea";
import {Drawer} from "antd";
import {SetImageIndexContext, SetShowDrawerContext} from "./ContentsContext";

export const ImageViewDrawer = ({imageInfos, imageIndex, showDrawer}) => {
    const setOpen = useContext(SetShowDrawerContext);
    const setImageIndex = useContext(SetImageIndexContext);

    const onClose = () => {
        setOpen(false);
    };

    const changeImageByPagination = (page) => {
        // pageはindexに対して1大きいので注意
        setImageIndex(page - 1);
    }

    return (
        <>
            <Drawer
                title={imageInfos[imageIndex].title}
                placement='bottom'
                onClose={onClose}
                open={showDrawer}
                height={'100%'}
            >
                <ImageViewArea
                    imageInfo={imageInfos[imageIndex]}
                    currentIndex={imageIndex + 1}
                    size={imageInfos.length}
                    onPaginationChanged={changeImageByPagination}
                    description={imageInfos[imageIndex].description}
                />
            </Drawer>
        </>
    );
}
