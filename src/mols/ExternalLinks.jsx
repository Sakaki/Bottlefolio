import React from 'react';
import styled from "styled-components";
import {Space} from "antd";
import {ExternalLink} from "../atoms/ExternalLink";
import {GithubOutlined, HomeOutlined, TwitterOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const LinkContainer = styled.div({
    textAlign: 'center',
})

export const ExternalLinks = ({links}) => {
    return (
        <Space direction="vertical" size="middle" style={{display: 'flex'}}>
            <LinkContainer>
                <Space size={'middle'}>
                    <ExternalLink
                        backgroundColor={'#f56a00'}
                        icon={<HomeOutlined/>}
                        text={'Blog'}
                        iconChar={''}
                        url={links.blog}
                    />
                    <ExternalLink
                        backgroundColor={'#7265e6'}
                        icon={<TwitterOutlined/>}
                        text={'Twitter'}
                        iconChar={''}
                        url={links.twitter}
                    />
                    <ExternalLink
                        backgroundColor={'#ffbf00'}
                        icon={undefined}
                        text={'Pixiv'}
                        iconChar={'P'}
                        url={links.pixiv}
                    />
                </Space>
            </LinkContainer>
            <LinkContainer>
                <Space size={'middle'}>
                    <ExternalLink
                        backgroundColor={'#00a2ae'}
                        icon={undefined}
                        text={'Skeb'}
                        iconChar={'S'}
                        url={links.skeb}
                    />
                    <ExternalLink
                        backgroundColor={'#f56a00'}
                        icon={<GithubOutlined/>}
                        text={'GitHub'}
                        iconChar={''}
                        url={links.gitHub}
                    />
                </Space>
            </LinkContainer>
        </Space>
    )
}

ExternalLinks.propTypes = {
    userInfo: PropTypes.object,
}
