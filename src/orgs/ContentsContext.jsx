import React, {useState} from 'react';
import {ImageCardList} from "./ImageCardList";
import {ImageViewDrawer} from "./ImageViewDrawer";

export const SetShowDrawerContext = React.createContext((state) => {
    console.log(state);
});
export const SetImageIndexContext = React.createContext((index) => {
    console.log(index);
});

export const ContentsContext = ({imageInfos}) => {
    const [showDrawer, setShowDrawer] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <SetShowDrawerContext.Provider value={setShowDrawer}>
            <SetImageIndexContext.Provider value={setImageIndex}>
                <ImageCardList imageInfos={imageInfos}/>
                <ImageViewDrawer imageInfos={imageInfos} imageIndex={imageIndex} showDrawer={showDrawer}/>
            </SetImageIndexContext.Provider>
        </SetShowDrawerContext.Provider>
    )
}
