import React from 'react';
import styled from 'styled-components';

const DescriptionText = styled.p({
    width: '100%',
    padding: 10,
});

export const Description =({}) => {
    return (
        <>
            <DescriptionText>
                テストです！よろしくお願いします！
            </DescriptionText>
        </>
    )
};
