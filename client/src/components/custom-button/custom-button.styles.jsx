import styled,{css} from "styled-components";

const isGoogleSignInStyles = css`
    background-color: #0F9D58;
    color: white;
    border: none;
    
    &:hover{
    background-color: #0b6e3e;
    }
`

const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid black;
    }
`
const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return isGoogleSignInStyles
    }
    return props.inverted ? invertedStyles : buttonStyles
}


export const ButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
  
    ${getButtonStyles}
`