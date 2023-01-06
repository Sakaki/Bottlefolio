import React from 'react';
import {Image as AntImage} from 'antd';
import PropTypes from "prop-types";

export const Image = ({imageUrl}) => {
    return (
        <>
            <AntImage
                width={'100%'}
                src={imageUrl}
            />
        </>
    )
};

Image.propTypes = {
    imageUrl: PropTypes.string,
};

Image.defaultProps = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
};
