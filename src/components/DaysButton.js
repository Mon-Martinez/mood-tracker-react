import React from 'react';
import styled from 'styled-components';

const DaysButton = (props) => {
    return(
        <>
            <DayOfWeekButton>{props.WeekButton}</DayOfWeekButton>
        </>
    );
}

export default DaysButton;

const DayOfWeekButton = styled.button`
    background-color: #C89DD8;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px;
    border-radius: 12px;
    width: 25%;
  }
`
