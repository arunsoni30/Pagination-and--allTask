import React from 'react';
import styled from 'styled-components';

const Title=styled.h1`
color: red;
background-color: black;
`;

const Hello = () => {
    return(
        <div>
            <Title>Hello</Title>
        </div>
    )
}

export default Hello;