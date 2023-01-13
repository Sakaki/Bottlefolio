import React from 'react';
import {Header} from "../mols/Header";
import {Profile} from "../orgs/Profile";
import styled from 'styled-components';
import {Divider} from "antd";
import {ImageCardList} from "../orgs/ImageCardList";
import PropTypes from "prop-types";

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
            <Container>
                <Header iconUrl={userInfo.header.iconUrl} backgroundUrl={userInfo.header.backgroundUrl}/>
                <Profile userInfo={userInfo}/>
                <InnerContainer>
                    <Divider orientation="left" orientationMargin="0">
                        Illustrations
                    </Divider>
                    <Works>
                        <ImageCardList imageInfos={imageInfos}/>
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
            iconUrl: 'https://blog.sakaki333.com/media/images/23/01/07/-pjp6ww.jpg',
            backgroundUrl: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
        }
    },
    imageInfos: [
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.jpg',
                rough: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101r.jpg',
                line: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101l.jpg',
                timeLapse: 'http://sakaki333.sakura.ne.jp/resources/images/medium/chino_101.gif'
            },
            title: 'タイトル1',
            subtitle: 'サブタイトル2',
            description: 'テスト1です！\nよろしくお願いします！！',
            props: {
                iconColor: 'pink',
            },
        },
        {
            link: {
                twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
                pixivUrl: 'https://www.pixiv.net/users/52366365',
            },
            imageUrls: {
                completed: 'https://blog.sakaki333.com/media/images/22/12/13/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%884.png',
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
