import React from 'react';
import {Header} from "../mols/Header";
import {Profile} from "../orgs/Profile";
import {ThumbnailList} from "../orgs/ThumbnailList";

export const PortalPage = ({items}) => {
    return (
        <>
            <Header/>
            <Profile/>
            <ThumbnailList items={items}/>
        </>
    )
}
