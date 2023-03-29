import React from 'react';
import styled from 'styled-components';

const Instructions = (props) => {
    return(
        <StyledDiv>
            <InstructionsText>{props.InstructionsContent}</InstructionsText>
        </StyledDiv>
    );
}

export default Instructions;

const InstructionsText = styled.p`
    text-align: center;
    font-size: 20px;
`
const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
    width: 40%;
    padding: 10px;
    margin-bottom: 10px;
    border: 2px solid violet;
    background-color: violet;
    border-radius: 15px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-botton: 20px;
`