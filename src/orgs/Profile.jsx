import React from 'react';
import styled from 'styled-components';
import {Space} from "antd";
import {GithubOutlined, HomeOutlined, TwitterOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";
import {ExternalLink} from "../atoms/ExternalLink";

const UserName = styled.p({
    fontSize: '150%',
    textAlign: 'center',
});

const Description = styled.p({
    marginTop: 60,
    textAlign: 'center',
    color: 'darkgray',
});

const LinkContainer = styled.div({
    textAlign: 'center',
})

export const Profile = ({userInfo}) => {
    const lineBrakedDescriptions = userInfo.description.split(/(\n)/).map((item) => {
        return (
            <p>{item}</p>
        )
    });

    return (
        <>
            <UserName style={{marginTop: 50}}>{userInfo.name}</UserName>
            <Space direction="vertical" size="middle" style={{display: 'flex'}}>
                <LinkContainer>
                    <Space>
                        <ExternalLink
                            backgroundColor={'#f56a00'}
                            icon={<HomeOutlined/>}
                            text={'Blog'}
                            iconChar={''}
                            url={userInfo.links.blog}
                        />
                        <ExternalLink
                            backgroundColor={'#7265e6'}
                            icon={<TwitterOutlined/>}
                            text={'Twitter'}
                            iconChar={''}
                            url={userInfo.links.twitter}
                        />
                        <ExternalLink
                            backgroundColor={'#ffbf00'}
                            icon={undefined}
                            text={'Pixiv'}
                            iconChar={'P'}
                            url={userInfo.links.pixiv}
                        />
                    </Space>
                </LinkContainer>
                <LinkContainer>
                    <Space>
                        <ExternalLink
                            backgroundColor={'#00a2ae'}
                            icon={undefined}
                            text={'Skeb'}
                            iconChar={'S'}
                            url={userInfo.links.skeb}
                        />
                        <ExternalLink
                            backgroundColor={'#f56a00'}
                            icon={<GithubOutlined/>}
                            text={'GitHub'}
                            iconChar={''}
                            url={userInfo.links.gitHub}
                        />
                    </Space>
                </LinkContainer>
            </Space>
            <Description>
                {lineBrakedDescriptions}
            </Description>
        </>
    )
}

Profile.propTypes = {
    userInfo: PropTypes.object,
}

Profile.defaultProps = {
    userInfo: {
        name: 'ユーザー',
        description: 'ユーザー説明',
        links: {
            blog: '#',
            twitter: '#',
            pixiv: '#',
            skeb: '#',
            gitHub: '#',
        }
    }
}
