import React from 'react';
import {Image} from "../../atoms/Image";
import {Tabs} from "antd";
import PropTypes from "prop-types";

export const ImageTabs = ({imageInfo, currentTabKey, onTabKeyChanged}) => {

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
            <Tabs
                type="card"
                activeKey={currentTabKey}
                items={items}
                onChange={onTabKeyChanged}
            />
        </>
    )
}

ImageTabs.propTypes = {
    imageInfo: PropTypes.object,
    currentTabKey: PropTypes.string,
    onTabKeyChanged: PropTypes.func,
}
