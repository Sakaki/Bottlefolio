import React from 'react';
import styled from 'styled-components';
import {Avatar} from "antd";

const HeaderDiv = styled.div({
    width: '100%',
    height: '150px',
    position: 'relative',
});

const UserAvatar = styled(Avatar)`
  position: absolute;
  left: 32px;
  bottom: -32px;
  color: #f56a00;
  background-color: #fde3cf;
`

const EyeCatchImage = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
});

export const Header = ({}) => {
    return (
        <>
            <HeaderDiv>
                <EyeCatchImage src={'https://cdn.vuetifyjs.com/images/parallax/material.jpg'}/>
                <UserAvatar shape="square" size={64}>U</UserAvatar>
            </HeaderDiv>
        </>
    )
}
