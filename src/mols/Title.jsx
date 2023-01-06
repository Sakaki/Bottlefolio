import React from 'react';
import {Avatar, Col, Row} from 'antd';
import styled from 'styled-components';

const MainTitle = styled.span({
    fontSize: '130%',
});

const SubTitle = styled.span({
    fontSize: '70%',
    marginLeft: 3
})

const ImageAvatar = styled(Avatar)`
  background-color: pink;
  vertical-align: middle;
  margin: 3px 10px 0 0;
`;

export const Title = ({}) => {
    return (
        <>
            <Row wrap={false}>
                <Col flex="none">
                    <ImageAvatar/>
                </Col>
                <Col flex="auto">
                    <MainTitle>Title</MainTitle><br/>
                    <SubTitle>subtitle</SubTitle>
                </Col>
            </Row>
        </>
    )
}
