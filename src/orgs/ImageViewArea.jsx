import React from 'react';
import PropTypes from 'prop-types';
import {Image} from "../atoms/Image";
import {Title} from "../mols/Title";
import {Description} from "../mols/Description";
import {LinkIcons} from "../mols/LinkIcons";
import {Pagination, Space} from "antd";
import styled from "styled-components";

const DetailContainer = styled(Space)`
  display: flex;
  max-width: 600px;
  margin: auto;
`

export const ImageViewArea = ({item, size, currentIndex, onChange}) => {
    return (
        <>
            <DetailContainer direction="vertical" size="middle">
                <div style={{textAlign: 'center'}}>
                    <Pagination
                        showSizeChanger={false}
                        current={currentIndex}
                        total={size}
                        onChange={onChange}
                        pageSize={1}
                    />
                </div>
                <Image imageUrl={item.imageUrl}/>
                <Title/>
                <Description/>
                <LinkIcons
                    pixivUrl={item.pixivUrl}
                    twitterUrl={item.twitterUrl}
                />
            </DetailContainer>
        </>
    )
};

ImageViewArea.propTypes = {
    item: PropTypes.object,
    size: PropTypes.number,
    currentIndex: PropTypes.number,
    onChange: PropTypes.func,
}

ImageViewArea.defaultProps = {
    item: {
        twitterUrl: 'https://twitter.com/Sakaki333/status/1599055861573353472',
        pixivUrl: 'https://www.pixiv.net/users/52366365',
    },
    size: 10,
    currentIndex: 1,
    onChange: () => {
        console.log('dummy')
    }
}
