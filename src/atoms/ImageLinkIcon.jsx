import React from 'react';
import PropTypes from 'prop-types';
import {Thumbnail} from "./Thumbnail";
import PixivIcon from "../assets/icon/pixiv_icon.svg";
import {Button} from "antd";
import styled from "styled-components";

const IconImage = styled.img({
    maxHeight: '30px',
    objectFit: 'contain',
})

export const ImageLinkIcon = ({url, svgIcon, alt}) => {
    return (
        <Button
            href={url}
            type="text"
            style={{width: '100%', height: '100%'}}
            icon={<IconImage src={svgIcon} alt={alt}/>}
        />
    );
};

Thumbnail.propTypes = {
    url: PropTypes.string,
    svgIcon: PropTypes.element,
    alt: PropTypes.string,
};

Thumbnail.defaultProps = {
    url: '#',
    iconType: PixivIcon,
    alt: 'pixiv',
};
