import React from 'react';
import {Header} from "../mols/Header";
import {Profile} from "../orgs/Profile";
import styled from 'styled-components';
import {Divider} from "antd";
import PropTypes from "prop-types";
import {ContentsContext} from "../orgs/ContentsContext";

const Container = styled.div({
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: 'white',
})

const InnerContainer = styled.div({
    margin: 12,
})

const Works = styled.div({
    paddingTop: 40,
    width: '90%',
    margin: 'auto',
})

export const PortalPage = ({userInfo, imageInfos}) => {
    return (
        <>
            <Header iconUrl={userInfo.header.iconUrl} backgroundUrl={userInfo.header.backgroundUrl}/>
            <Container>
                <Profile userInfo={userInfo}/>
                <InnerContainer>
                    <Divider orientation="left" orientationMargin="0">
                        Illustrations
                    </Divider>
                    <Works>
                        <ContentsContext imageInfos={imageInfos}/>
                    </Works>
                </InnerContainer>
            </Container>
        </>
    )
}

PortalPage.propTypes = {
    userInfo: PropTypes.object,
    imageInfo: PropTypes.object,
};

PortalPage.defaultProps = {
    userInfo: {
        name: 'ユーザー',
        description: 'ユーザー説明',
        links: {
            blog: '#',
            twitter: '#',
            pixiv: '#',
            skeb: '#',
            gitHub: '#',
        },
        header: {
            iconUrl: 'https://via.placeholder.com/128',
            backgroundUrl: 'https://via.placeholder.com/720x1280',
        }
    },
    imageInfos: [
        {
            link: {
                twitterUrl: '#',
                pixivUrl: '#',
            },
            imageUrls: {
                completed: 'https://via.placeholder.com/720x1280',
                rough: 'https://via.placeholder.com/720x1280',
                line: 'https://via.placeholder.com/720x1280',
                timeLapse: 'https://via.placeholder.com/720x1280'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル1',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
        {
            link: {
                twitterUrl: '#',
                pixivUrl: '#',
            },
            imageUrls: {
                completed: 'https://via.placeholder.com/720x1280',
                rough: '',
                line: '',
                timeLapse: ''
            },
            title: 'タイトル2',
            subtitle: 'サブタイトル2',
            description: 'テスト2です！\nよろしく\nお願いします！！',
            props: {
                iconColor: 'orange',
            },
        },
    ]
}
