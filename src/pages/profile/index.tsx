import React from "react";

import { Flex, EmptyDataMessage } from "components";
import { UserInfo } from "./components";

import { useHandleData } from "./hooks";

const Profile: React.FC = () => {
  const { profile, pending } = useHandleData();

  return (
    <Flex height="100vh" width="100%" justifyContent="center">
      {profile && !pending ? (
        <UserInfo />
      ) : !profile && !pending ? (
        <EmptyDataMessage
          title="Unfortunately we cannot find information for the specified user"
          text=""
        />
      ) : (
        <Flex
          height="100vh"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          Loading...
        </Flex>
      )}
    </Flex>
  );
};

export default Profile;
