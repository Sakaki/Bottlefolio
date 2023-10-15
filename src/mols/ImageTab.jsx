import React, {useEffect, useRef, useState} from 'react';
import {Image} from "../atoms/Image";
import {Carousel, Tabs} from "antd";
import {CaretLeftOutlined, CaretRightOutlined} from "@ant-design/icons";

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

    useEffect(() => {
        setTabKey('1');
        carouselRef.current.goTo(0);
    }, [imageInfo])

    const visibleItems = imageKeyRefs.filter((refItem) => imageInfo.imageUrls[refItem.refName] !== '');
    const tabItems = visibleItems.map((refItem, index) => {
        return {
            key: (index + 1).toString(),
            label: refItem.text,
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
                activeKey={tabKey}
                items={tabItems}
                onChange={(tabKeyStr) => {
                    setTabKey(tabKeyStr);
                    carouselRef.current.goTo(parseInt(tabKeyStr) - 1)
                }}
            />
            <Carousel
                arrows
                prevArrow={<CaretLeftOutlined />}
                nextArrow={<CaretRightOutlined/>}
                ref={carouselRef}
                infinite={false}
                speed={0}
                afterChange={(currentKey) => setTabKey((currentKey + 1).toString())}
            >
                {carouselItems}
            </Carousel>
        </>
    )
}
