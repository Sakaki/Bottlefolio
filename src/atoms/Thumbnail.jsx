import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ThumbnailImage = styled.img({
    width: '100%',
    objectFit: 'cover',
    objectPosition: '0 5%',
    transform: 'scale(0.99)',
})

export const Thumbnail = ({imageUrl, alt}) => {
    const ref = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);

    useEffect(() => {
        setImageHeight(ref.current ? ref.current.offsetWidth : 0);
    }, []);

    return (
        <>
            <ThumbnailImage
                ref={ref}
                src={imageUrl}
                style={{height: imageHeight}}
                alt={alt}
            />
        </>
    );
};

Thumbnail.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
};

Thumbnail.defaultProps = {
    imageUrl: 'https://blog.sakaki333.com/media/images/22/12/11/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%886.png',
    alt: 'image',
};
