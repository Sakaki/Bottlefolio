import React from 'react';
import styled from 'styled-components';
import {Avatar, Space} from "antd";
import {HomeOutlined, TwitterOutlined} from "@ant-design/icons";

const UserName = styled.p({
    fontSize: '150%',
    textAlign: 'center',
});

const Description = styled.p({
    marginTop: 50,
    textAlign: 'center',
    lineHeight: '4ex',
    color: 'darkgray',
});

const LinkContainer = styled.div({
    textAlign: 'center',
})

export const Profile = ({}) => {
    return (
        <>
            <UserName>サカキ</UserName>
            <LinkContainer>
                <Space>
                    <Avatar size='small' style={{backgroundColor: '#f56a00'}} icon={<HomeOutlined/>}/> Blog
                    <Avatar size='small' style={{backgroundColor: '#7265e6'}} icon={<TwitterOutlined/>}/> Twitter
                    <Avatar size='small' style={{backgroundColor: '#ffbf00'}}>P</Avatar> Pixiv
                    <Avatar size='small' style={{backgroundColor: '#00a2ae'}}>S</Avatar> Skeb
                </Space>
            </LinkContainer>
            <Description>
                イラストを描くプログラマーです。<br/>
                ご依頼はPixivかSkebでお願いします。
            </Description>
        </>
    )
}
