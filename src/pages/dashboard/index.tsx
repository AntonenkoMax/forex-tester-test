import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/store";
import { getData } from "../../store/hacker-news/actions";
import { EmptyDataMessage, Flex } from "../../components";
import { HackersCard } from "./components";
import { StyledCardList, StyledDashboardWrapper } from "./styled";

const Dashboard: React.FC = () => {
  const data = useAppSelector((state) => state.hackersNews.data);
  const pending = useAppSelector((state) => state.hackersNews.pending);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData({ tags: "front_page" }));
  }, [dispatch]);

  return (
    <StyledDashboardWrapper>
      {data && !pending ? (
        <StyledCardList>
          {data.hits.map((item) => {
            return <HackersCard key={item.story_id} hit={item} />;
          })}
        </StyledCardList>
      ) : !data && !pending ? (
        <EmptyDataMessage
          title="Unfortunately we cannot find information"
          text=""
        />
      ) : (
        <Flex
          height="100%"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          Loading...
        </Flex>
      )}
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
