import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const ThumbnailImage = styled.img({
    width: '100%',
    objectFit: 'cover',
    objectPosition: '0 5%',
    transform: 'scale(0.99)',
})

export const Thumbnail = ({imageUrl, alt, onLoad}) => {
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
                onLoad={onLoad}
            />
        </>
    );
};

Thumbnail.propTypes = {
    imageUrl: PropTypes.string,
    alt: PropTypes.string,
};

Thumbnail.defaultProps = {
    imageUrl: 'https://via.placeholder.com/720x1280',
    alt: 'image',
};
