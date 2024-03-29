import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Avatar, Skeleton, Spin} from "antd";
import PropTypes from "prop-types";

const HeaderDiv = styled.div({
    width: '100%',
    height: '400px',
    maxHeight: '45vh',
    position: 'relative',
    borderBottom: '1px solid',
    borderColor: 'lightgray',
    boxShadow: '3px 3px 18px 3px rgba(208, 216, 243, 0.8)',
});

const UserAvatar = styled(Avatar)`
  position: absolute;
  left: calc(50% - 32px);
  bottom: -32px;
  color: #f56a00;
`

const UserAvatarSkeleton = styled(Skeleton.Avatar)`
  position: absolute;
  left: calc(50% - 32px);
  bottom: -32px;
`

const EyeCatchImage = styled.img({
    width: '100%',
    height: '400px',
    maxHeight: '45vh',
    objectFit: 'cover',
    overflow: 'hidden',
});

export const Header = ({backgroundUrl, iconUrl}) => {
    const ref = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        imageLoaded();
    }, []);

    const imageLoaded = () => {
        if (ref.current && ref.current.complete) {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

    return (
        <>
            <HeaderDiv>
                <Spin tip="Loading" spinning={loading} delay={100} size="large">
                    {backgroundUrl !== undefined &&
                        <EyeCatchImage
                            ref={ref}
                            src={backgroundUrl}
                            onLoad={imageLoaded}
                            onChange={() => setLoading(true)}
                        />
                    }
                </Spin>
                {loading
                    ? <UserAvatarSkeleton active shape="circle" size={64}/>
                    : <UserAvatar src={iconUrl} size={64}/>
                }
            </HeaderDiv>
        </>
    )
}

Header.propTypes = {
    backgroundUrl: PropTypes.string,
    iconUrl: PropTypes.string,
};

Header.defaultProps = {
    backgroundUrl: 'https://via.placeholder.com/720x1280',
    iconUrl: 'https://via.placeholder.com/128/f0f8ff',
};
