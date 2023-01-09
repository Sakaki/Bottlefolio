import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const DescriptionText = styled.p({
    width: '100%',
    padding: 10,
});

export const Description = ({text}) => {
    const lineBrakedTexts = text.split(/(\n)/).map((item) => {
        return (
            <p>{item}</p>
        )
    });

    return (
        <>
            <DescriptionText>
                {lineBrakedTexts}
            </DescriptionText>
        </>
    )
};

Description.propTypes = {
    text: PropTypes.string,
};

Description.defaultProps = {
    text: 'テストです！\nよろしくお願いします！！',
};
