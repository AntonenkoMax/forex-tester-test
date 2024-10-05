import React from "react";

import StyledButton from "./styled";
import { ButtonProps } from "./types";

import { SpinnerIcon } from "components/svg";
import { Text } from "components";

const Button = <E extends React.ElementType = "button">({
  isLoading = false,
  disabled = false,
  children,
  type,
  ...rest
}: ButtonProps<E>): JSX.Element => {
  const isDisabled = isLoading || disabled;

  return (
    <StyledButton {...rest} type={type || "button"} disabled={isDisabled}>
      {isLoading ? (
        <SpinnerIcon color="regular" />
      ) : (
        <>{typeof children === "string" ? <Text>{children}</Text> : children}</>
      )}
    </StyledButton>
  );
};

export default Button;
