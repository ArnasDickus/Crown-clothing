import styled, { css } from 'styled-components';

const buttonStyles = css`
    background-color: black;
    color: #ffffff;
    border: none;
    
    &:hover {
        background-color: #ffffff;
        color: #000000;
        border: 1px solid #000000;
    }
`;

export const invertedButtonStyles = css`
    background-color: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    
    &:hover {
      background-color: #000000;
      color: #ffffff;
      border: none;
    }
`;

export const googleSignInStyles = css`
    background-color: #4285f4;
    color: #ffffff;
    
    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return googleSignInStyles;
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    margin-top: 20px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border: none;
    
    ${getButtonStyles}
`;
