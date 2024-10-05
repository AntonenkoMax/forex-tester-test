import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../index";
import { StyledFooterContainer } from "./styled";
import { ROUTES } from "../../navigation/routes";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledFooterContainer>
      <Button
        onClick={() => {
          navigate(`/${ROUTES.about}`);
        }}
      >
        Help center
      </Button>
    </StyledFooterContainer>
  );
};

export default Footer;
