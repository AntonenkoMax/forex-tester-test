import React from "react";
import ReactPaginate from "react-paginate";
import { PaginationLeftArrow, PaginationRightArrow } from "components/svg";
import StyledCustomPaginate from "./styled";
import { PaginationContainerProps } from "./types";

const PaginationContainer: React.FC<PaginationContainerProps> = ({
  handlePageClick,
  nbPages,
  page,
}) => {
  return (
    <StyledCustomPaginate>
      <ReactPaginate
        nextLabel={<PaginationRightArrow width="24px" />}
        previousLabel={<PaginationLeftArrow width="24px" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={nbPages}
        disabledClassName="transparent"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={() => null}
        forcePage={nbPages > 0 ? page : undefined}
      />
    </StyledCustomPaginate>
  );
};

export default PaginationContainer;
