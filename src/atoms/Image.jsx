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
    imageUrl: 'https://via.placeholder.com/720x1280',
};
