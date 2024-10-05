import React from "react";
import { Button } from "../index";
import { StyledHeaderContainer } from "./styled";

const Header: React.FC = () => {
  return (
    <StyledHeaderContainer>
      <Button
        onClick={() => {
          console.log("You press Header button");
        }}
      >
        Header button
      </Button>
    </StyledHeaderContainer>
  );
};

export default Header;
