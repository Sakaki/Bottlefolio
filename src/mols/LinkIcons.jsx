import React from 'react';
import {Col, Row} from 'antd';
import TwitterIcon from "../assets/icon/twitter_icon.svg";
import {ImageLinkIcon} from "../atoms/ImageLinkIcon";
import PixivIcon from "../assets/icon/pixiv_icon.svg";
import PropTypes from "prop-types";

export const LinkIcons = ({twitterUrl, pixivUrl}) => {
    return (
        <>
            <Row wrap={false}>
                <Col flex="auto">
                    <ImageLinkIcon
                        svgIcon={TwitterIcon}
                        url={twitterUrl}
                        alt={'Twitter'}
                    />
                </Col>
                <Col flex="auto">
                    <ImageLinkIcon
                        svgIcon={PixivIcon}
                        url={pixivUrl}
                        alt={'Pixiv'}
                    />
                </Col>
            </Row>
        </>
    )
};

LinkIcons.propTypes = {
    twitterUrl: PropTypes.string,
    pixivUrl: PropTypes.string,
};

LinkIcons.defaultProps = {
    twitterUrl: '#',
    pixivUrl: '#',
};
