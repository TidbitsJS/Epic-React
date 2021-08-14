import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer type="button" {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
