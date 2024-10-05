import React, { useEffect } from "react";

import { EmptyDataMessage, Flex, PaginationContainer } from "components";
import { HackersCard } from "./components";

import { useAppDispatch, useAppSelector } from "store/store";
import { getData } from "store/hacker-news/actions";
import { StyledCardList, StyledDashboardWrapper } from "./styled";

import { scrollToTop } from "utils/helpers";

const Dashboard: React.FC = () => {
  const data = useAppSelector((state) => state.hackersNews.data);
  const pending = useAppSelector((state) => state.hackersNews.pending);

  const dispatch = useAppDispatch();

  const getDataParams = { tags: "front_page", hitsPerPage: 10 };

  useEffect(() => {
    dispatch(getData(getDataParams));
  }, [dispatch, getDataParams]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    dispatch(getData({ ...getDataParams, page: selectedItem.selected }));
    scrollToTop();
  };

  return (
    <StyledDashboardWrapper>
      {data && !pending ? (
        <StyledCardList>
          {data.hits.map((item) => {
            return <HackersCard key={item.created_at_i} hit={item} />;
          })}

          <PaginationContainer
            handlePageClick={handlePageClick}
            nbPages={data.nbPages}
            page={data.page}
          />
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
