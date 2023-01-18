import React, {useState} from 'react';
import {Image as AntImage, Spin} from 'antd';
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled(AntImage)`
  min-height: 500px;
  object-fit: contain;
`

export const Image = ({imageUrl}) => {
    const [loading, setLoading] = useState(true);

    return (
        <>
            <Spin tip="Loading" spinning={loading} size="large">
                <StyledImage
                    width={'100%'}
                    src={imageUrl}
                    onLoad={() => setLoading(false)}
                    onChange={() => setLoading(true)}
                />
            </Spin>
        </>
    )
};

Image.propTypes = {
    imageUrl: PropTypes.string,
};

Image.defaultProps = {
    imageUrl: 'https://via.placeholder.com/720x1280',
};
