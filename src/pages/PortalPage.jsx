import React from 'react';
import {Header} from "../mols/Header";
import {Profile} from "../orgs/Profile";
import {ThumbnailList} from "../orgs/ThumbnailList";
import styled from 'styled-components';
import {Divider} from "antd";

const Container = styled.div({
    maxWidth: '600px',
    margin: 'auto'
})

export const PortalPage = ({items}) => {
    return (
        <>
            <Container>
                <Header/>
                <Profile/>
                <Divider orientation="left" orientationMargin="0">
                    Illustrations
                </Divider>
                <ThumbnailList items={items}/>
            </Container>
        </>
    )
}
