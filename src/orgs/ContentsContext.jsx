import React, {useState} from 'react';
import {ImageCardList} from "./ImageCardList";
import {ImageViewDrawer} from "./ImageViewDrawer";

export const TabKeyContext = React.createContext('1');
export const SetTabKeyContext = React.createContext((activeKey) => {
    console.log(activeKey);
});
export const SetShowDrawerContext = React.createContext((state) => {
    console.log(state);
});
export const SetImageIndexContext = React.createContext((index) => {
    console.log(index);
});

export const ContentsContext = ({imageInfos}) => {
    const [tabKey, setTabKey] = useState('1');
    const [showDrawer, setShowDrawer] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <TabKeyContext.Provider value={tabKey}>
            <SetTabKeyContext.Provider value={setTabKey}>
                <SetShowDrawerContext.Provider value={setShowDrawer}>
                    <SetImageIndexContext.Provider value={setImageIndex}>
                        <ImageCardList imageInfos={imageInfos}/>
                        <ImageViewDrawer imageInfos={imageInfos} imageIndex={imageIndex} showDrawer={showDrawer}/>
                    </SetImageIndexContext.Provider>
                </SetShowDrawerContext.Provider>
            </SetTabKeyContext.Provider>
        </TabKeyContext.Provider>
    )
}
