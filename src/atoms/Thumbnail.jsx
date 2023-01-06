import React from 'react';
import PropTypes from 'prop-types';

export const Thumbnail = ({imageUrl}) => {
    return (
        <>
            <img src={imageUrl} style={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                objectPosition: '0 5%',
            }} alt={'test'}/>
        </>
    );
};

Thumbnail.propTypes = {
    imageUrl: PropTypes.string,
};

Thumbnail.defaultProps = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
};
