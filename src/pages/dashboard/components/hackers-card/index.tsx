import React, { useState } from "react";
import moment from "moment/moment";

import { HackersCardProps } from "./types";
import { Button, Flex } from "components";
import {
  StyledHackersCard,
  StyledCardStatus,
  StyledNameSubject,
  StyledDate,
} from "./styled";
import { deleteHit } from "store/hacker-news";
import { useAppDispatch } from "store/store";

const HackersCard: React.FC<HackersCardProps> = ({ hit }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useAppDispatch();

  const clickPrevent = (e: React.MouseEvent) => {
    if (isActive) {
      e.stopPropagation();
    }
  };

  return (
    <StyledHackersCard
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <Flex flexDirection="column" height="100%">
        <StyledCardStatus onClick={clickPrevent} isActive={isActive}>
          Status
        </StyledCardStatus>
      </Flex>

      <Flex flexDirection="column" width="100%">
        <Flex gap="24px" width="100%">
          <Flex gap="24px" flexWrap="wrap">
            <StyledNameSubject onClick={clickPrevent}>
              {hit.author}
            </StyledNameSubject>
            {!isActive && <StyledNameSubject>{hit.title}</StyledNameSubject>}
          </Flex>

          <StyledDate onClick={clickPrevent}>
            {moment(hit.created_at).format("HH:mm DD MMMM YYYY")}
          </StyledDate>
        </Flex>

        {isActive && (
          <Flex mt="24px" gap="24px" flexDirection="column">
            <StyledNameSubject onClick={clickPrevent}>
              {hit.title}
            </StyledNameSubject>

            <Flex justifyContent="space-between">
              <Flex flexDirection="column" justifyContent="space-between">
                <Button onClick={clickPrevent}>Buttons</Button>
                <Button onClick={clickPrevent}>Show us your-</Button>
              </Flex>

              <Flex flexDirection="column" gap="12px">
                <Button onClick={clickPrevent}>1</Button>
                <Button onClick={clickPrevent}>2</Button>
                <Button onClick={clickPrevent}>3</Button>
              </Flex>

              <Flex flexDirection="column" justifyContent="center">
                <Button
                  color="red"
                  onClick={(e: React.MouseEvent) => {
                    clickPrevent(e);
                    dispatch(deleteHit(hit.created_at_i));
                  }}
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </StyledHackersCard>
  );
};

export default HackersCard;
