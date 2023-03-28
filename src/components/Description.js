import React from 'react';
import styled from 'styled-components';

const Description = (props) => {
    return(
        <>
            <DescriptionText>{props.DescriptionContent}</DescriptionText>
        </>
    );
}

export default Description;

const DescriptionText = styled.h3`
    text-align: center;
`