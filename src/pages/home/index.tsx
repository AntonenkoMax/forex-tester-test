import React from "react";

import { Text, Flex, Input, Button } from "components";
import { StyledForm } from "./styled";
import { useHandleData } from "./hooks";

const Home: React.FC = () => {
  const { inputValue, inputChangeHandler, submitHandler, keyDownHandler } =
    useHandleData();

  return (
    <Flex justifyContent="center" alignItems="center" height="100%" py="120px">
      <Flex width="320px" flexDirection="column">
        <Text fontSize="40px" fontWeight="600" mb="24px">
          GitHub Profile
        </Text>

        <Text textAlign="start" width="100%" mb="14px">
          Enter GitHub profile name
        </Text>

        <StyledForm onSubmit={submitHandler}>
          <Input
            mb="14px"
            value={inputValue}
            placeholder={"Enter Name"}
            onChange={inputChangeHandler}
            onKeyDown={keyDownHandler}
          />

          <Button width="100%" type="submit">
            Check Profile
          </Button>
        </StyledForm>
      </Flex>
    </Flex>
  );
};

export default Home;
