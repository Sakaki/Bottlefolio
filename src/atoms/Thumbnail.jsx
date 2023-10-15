import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Spin} from "antd";

const ThumbnailImage = styled.img({
    width: '100%',
    objectFit: 'cover',
    objectPosition: '0 5%',
})

export const Thumbnail = ({imageUrl, alt}) => {
    const ref = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        imageLoaded();
    }, []);

    const imageLoaded = () => {
        setImageHeight(ref.current ? ref.current.offsetWidth : 0);
        if (ref.current && ref.current.complete) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    return (
        <>
            <Spin tip="Loading" spinning={loading} size="large">
                {imageUrl !== undefined &&
                    <ThumbnailImage
                        ref={ref}
                        src={imageUrl}
                        alt={alt}
                        onChange={() => setLoading(true)}
                        onLoad={imageLoaded}
                    />
                }
            </Spin>
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
