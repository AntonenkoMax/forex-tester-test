import React from "react";
import moment from "moment/moment";

import { Flex, Text } from "components";

import { useHandleData } from "./hooks";

import { StyledUserInfo, StyledUserInfoRow, StyledLink } from "./styled";

const UserInfo = () => {
  const { profile, languages, repositories, getLanguagesArr } = useHandleData();

  return (
    <StyledUserInfo>
      <StyledUserInfoRow>
        <Text fontSize="18px" fontWeight="700">
          User Name
        </Text>
        <Text>{profile?.login}</Text>
      </StyledUserInfoRow>

      <StyledUserInfoRow>
        <Text fontSize="18px" fontWeight="700" justifyContent="space-between">
          Profile Name
        </Text>
        <Text>{profile?.name ?? "Profile does not contain name"}</Text>
      </StyledUserInfoRow>

      <StyledUserInfoRow>
        <Text fontSize="18px" fontWeight="700" justifyContent="space-between">
          Number of public repositories
        </Text>
        <Text>
          {profile?.public_repos ?? "Profile does not contain repositories"}
        </Text>
      </StyledUserInfoRow>

      <StyledUserInfoRow>
        <Text fontSize="18px" fontWeight="700" justifyContent="space-between">
          Profile created
        </Text>
        <Text>{moment(profile?.created_at).format("DD/MM/YYYY")}</Text>
      </StyledUserInfoRow>

      <Flex justifyContent="center" mb="36px">
        <Text fontSize="22px" fontWeight="700">
          Languages
        </Text>
      </Flex>

      <Flex mb="28px" flexDirection="column">
        {languages
          ? getLanguagesArr().map((item, index) => {
              return (
                <StyledUserInfoRow>
                  <Text fontSize="18px" fontWeight="700">
                    {Object.keys(item)[0]}
                  </Text>
                  <Text>{`${Object.values(item)[0]}%`}</Text>
                </StyledUserInfoRow>
              );
            })
          : null}
      </Flex>

      <Flex justifyContent="center" mb="36px">
        <Text fontSize="22px" fontWeight="700">
          Repositories
        </Text>
      </Flex>

      <Flex flexDirection="column">
        {repositories
          ? repositories.map((repo, index) => {
              return (
                <Flex key={index} flexDirection="column" mb="20px">
                  <Text
                    fontSize="18px"
                    fontWeight="700"
                    mb="8px"
                  >{`${index + 1}: ${repo.name}`}</Text>
                  <StyledLink
                    target="_blank"
                    rel="noreferrer"
                    href={repo.html_url}
                  >
                    {repo.html_url}
                  </StyledLink>
                </Flex>
              );
            })
          : null}
      </Flex>
    </StyledUserInfo>
  );
};

export default UserInfo;
