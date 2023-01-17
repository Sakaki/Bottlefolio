import React, {useContext} from 'react';
import {Image} from "../atoms/Image";
import {Tabs} from "antd";
import {TabKeyContext, SetTabKeyContext} from "../orgs/ContentsContext";

export const ImageTab = ({imageInfo}) => {
    const tabKey = useContext(TabKeyContext);
    const setTabKey = useContext(SetTabKeyContext);

    const onTabKeyChanged = (activeKey) => {
        setTabKey(activeKey);
    }

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
                activeKey={tabKey}
                items={items}
                onChange={onTabKeyChanged}
            />
        </>
    )
}
