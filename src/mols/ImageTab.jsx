import React, {useRef, useState} from 'react';
import {Image} from "../atoms/Image";
import {Carousel, Tabs} from "antd";

const imageKeyRefs = [
    {
        refName: 'completed',
        text: 'イラスト',
    },
    {
        refName: 'rough',
        text: 'ラフ',
    },
    {
        refName: 'line',
        text: '線画',
    },
    {
        refName: 'timeLapse',
        text: 'タイムラプス',
    },
]

export const ImageTab = ({imageInfo}) => {
    const carouselRef = useRef(null);
    const [tabKey, setTabKey] = useState('1');

    const onItemChange = (targetKey) => {
        setTabKey((targetKey + 1).toString());
        carouselRef.current.goTo(targetKey);
    }

    const visibleItems = imageKeyRefs.filter((refItem) => imageInfo.imageUrls[refItem.refName] !== '');
    const tabItems = visibleItems.map((refItem, index) => {
        return {
            key: (index + 1).toString(),
            label: refItem.text
        }
    });
    const carouselItems = visibleItems.map((refItem, index) =>
        <div key={index.toString()}>
            <Image imageUrl={imageInfo.imageUrls[refItem.refName]}/>
        </div>
    );

    return (
        <>
            <Tabs
                type="card"
                activeKey={tabKey}
                items={tabItems}
                onChange={(tabKeyStr) => onItemChange(parseInt(tabKeyStr) - 1)}
            />
            <Carousel
                ref={carouselRef}
                dots={false}
                infinite={false}
                afterChange={(currentKey) => onItemChange(currentKey)}
            >
                {carouselItems}
            </Carousel>
        </>
    )
}
