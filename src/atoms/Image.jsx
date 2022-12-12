import React from 'react';
import PropTypes from 'prop-types';
import { Image as AntImage } from 'antd';

export const Image = ({ imageUrl, ...props }) => {
    return (
        <AntImage src={imageUrl}>Primary Button</AntImage>
    );
};

Image.propTypes = {
    imageUrl: PropTypes.string,
};

Image.defaultProps = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
};
