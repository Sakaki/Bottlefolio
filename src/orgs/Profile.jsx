import React from 'react';
import styled from 'styled-components';
import {Avatar, Col, Row} from "antd";
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

const LinkCol = styled(Col)`
  margin: 0 10px;
`

export const Profile = ({}) => {
    return (
        <>
            <UserName>サカキ</UserName>
            <Row justify="center">
                <LinkCol>
                    <Avatar size='small' style={{backgroundColor: '#f56a00'}} icon={<HomeOutlined/>} /> Home
                </LinkCol>
                <LinkCol>
                    <Avatar size='small' style={{backgroundColor: '#7265e6'}} icon={<TwitterOutlined />} /> Twitter
                </LinkCol>
                <LinkCol>
                    <Avatar size='small' style={{backgroundColor: '#ffbf00'}}>P</Avatar> Pixiv
                </LinkCol>
            </Row>
            <Description>
                イラストを描くプログラマーです。<br/>
                ご依頼はPixivかSkebでお願いします。
            </Description>
        </>
    )
}
