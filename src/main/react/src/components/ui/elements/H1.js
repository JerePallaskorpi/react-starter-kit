import styled, { css } from 'styled-components';

export const H1 = styled.h1`
    font-size: 18px;
    text-align: ${props => props.centered && 'center'};
    color: ${props => props.color && props.color}
    
    ${props => props.secondary && css`
        font-size: 16px;
    `}
`;
