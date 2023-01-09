import React from 'react';
import {Avatar, Col, Row} from 'antd';
import styled from 'styled-components';
import PropTypes from "prop-types";

const MainTitle = styled.span({
    fontSize: '130%',
});

const SubTitle = styled.span({
    fontSize: '85%',
    marginLeft: 3
})

const ImageAvatar = styled(Avatar)`
  vertical-align: middle;
  margin: 3px 10px 0 0;
`;

export const Title = ({title, subtitle, iconColor}) => {
    return (
        <>
            <Row wrap={false}>
                <Col flex="none">
                    <ImageAvatar style={{backgroundColor: iconColor}} size={40}/>
                </Col>
                <Col flex="auto" style={{paddingLeft: 10}}>
                    <MainTitle>{title}</MainTitle><br/>
                    <SubTitle>{subtitle}</SubTitle>
                </Col>
            </Row>
        </>
    )
}

Title.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    iconColor: PropTypes.string,
};

Title.defaultProps = {
    title: 'タイトル',
    subtitle: 'サブタイトル',
    iconColor: 'pink',
};
