import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import {Spin} from "antd";

const ThumbnailImage = styled.img({
    width: '100%',
    objectFit: 'cover',
    objectPosition: '0 5%',
    transform: 'scale(0.99)',
})

export const Thumbnail = ({imageUrl, alt}) => {
    const ref = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setImageHeight(ref.current ? ref.current.offsetWidth : 0);
    }, []);

    return (
        <>
            <Spin tip="Loading" spinning={loading} delay={100} size="large">
                {imageUrl !== undefined &&
                    <ThumbnailImage
                        ref={ref}
                        src={imageUrl}
                        style={{height: imageHeight}}
                        alt={alt}
                        onChange={() => setLoading(true)}
                        onLoad={() => {
                            setTimeout(() => setLoading(false), 500);
                        }}
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
