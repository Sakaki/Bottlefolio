import React from 'react';
import {Header} from "../mols/Header";
import {Profile} from "../orgs/Profile";
import styled from 'styled-components';
import {Divider} from "antd";
import {ImageCardList} from "../orgs/ImageCardList";

const Container = styled.div({
    maxWidth: '600px',
    margin: 'auto'
})

const Works = styled.div({
    paddingTop: 40,
    width: '80%',
    margin: 'auto',
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
                <Works>
                    <ImageCardList items={items}/>
                </Works>
            </Container>
        </>
    )
}
