import React from 'react';
import {Avatar, Space} from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const LinkWithoutDecoration = styled.a({
    textDecoration: 'none',
})

const LinkText = styled.span({
    color: 'black',
    fontSize: '115%',
    lineHeight: '115%',
})

export const ExternalLink = ({url, backgroundColor, icon, iconChar, text}) => {
    return (
        <>
            <LinkWithoutDecoration href={url}>
                <Space>
                    <Avatar
                        size='small'
                        style={{backgroundColor: backgroundColor}}
                        icon={icon}
                    >
                        {iconChar}
                    </Avatar>
                    <LinkText>{text}</LinkText>
                </Space>
            </LinkWithoutDecoration>
        </>
    )
}

ExternalLink.propTypes = {
    url: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.element,
    iconChar: PropTypes.string,
    text: PropTypes.string,
}

ExternalLink.defaultProps = {
    url: 'https://blog.sakaki333.com',
    backgroundColor: '#f56a00',
    icon: undefined,
    iconChar: '',
    text: 'Blog'
}
