import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "./Image";
import PixivIcon from "../assets/icon/pixiv_icon.svg";
import {Button} from "antd";

export const ImageLinkIcon = ({url, svgIcon, alt}) => {
    return (
        <Button href={url} type="text" style={{width: '100%', height: '100%'}}>
            <img src={svgIcon} style={{width: '70%', maxHeight: '30px'}} alt={alt}/>
        </Button>
    );
};

Image.propTypes = {
    url: PropTypes.string,
    svgIcon: PropTypes.element,
    alt: PropTypes.string,
};

Image.defaultProps = {
    url: 'https://twitter.com/Sakaki333/status/1599055861573353472',
    iconType: PixivIcon,
};
