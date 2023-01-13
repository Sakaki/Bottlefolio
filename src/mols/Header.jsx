import React from 'react';
import styled from 'styled-components';
import {Avatar} from "antd";
import PropTypes from "prop-types";

const HeaderDiv = styled.div({
    width: '100%',
    height: '400px',
    maxHeight: '45vh',
    position: 'relative',
    borderBottom: '1px solid',
    borderColor: 'lightgray',
});

const UserAvatar = styled(Avatar)`
  position: absolute;
  left: calc(50% - 32px);
  bottom: -32px;
  color: #f56a00;
  background-color: #fde3cf;
`

const EyeCatchImage = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: '0 20%',
});

export const Header = ({backgroundUrl, iconUrl}) => {
    return (
        <>
            <HeaderDiv>
                <EyeCatchImage src={backgroundUrl}/>
                <UserAvatar src={iconUrl} shape="square" size={64}></UserAvatar>
            </HeaderDiv>
        </>
    )
}

Header.propTypes = {
    backgroundUrl: PropTypes.string,
    iconUrl: PropTypes.string,
};

Header.defaultProps = {
    backgroundUrl: 'https://via.placeholder.com/720x1280',
    iconUrl: 'https://via.placeholder.com/128/f0f8ff',
};
