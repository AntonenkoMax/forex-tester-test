import React from "react";
import { useNavigate } from "react-router-dom";
import { Text, Flex, Button } from "components";

import { EmptyDataMessageProps } from "./types";
import { ROUTES } from "../../../navigation/routes";

const EmptyDataMessage: React.FC<EmptyDataMessageProps> = ({ title, text }) => {
  const defaultTitle: string = "List is empty";
  const defaultText: string = "No values available at the moment";
  const navigate = useNavigate();

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        mb="36px"
        fontWeight="600"
        fontSize="44px"
        textAlign="center"
        maxWidth="640px"
      >
        {title ?? defaultTitle}
      </Text>

      <Text mb="36px">{text ?? defaultText}</Text>

      <Button
        onClick={() => {
          navigate(ROUTES.home);
        }}
      >
        Go Home
      </Button>
    </Flex>
  );
};

export default EmptyDataMessage;
