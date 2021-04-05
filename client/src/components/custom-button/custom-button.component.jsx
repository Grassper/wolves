import React from "react";
import { ButtonContainer } from "./custom-button.styles"

const CustomButton = ({children,...otherProps}) => {
    return (<ButtonContainer {...otherProps}>
                {children}
            </ButtonContainer>)
}

export default CustomButton;