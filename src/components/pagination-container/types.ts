export type PaginationContainerProps = {
  handlePageClick: (selectedItem: { selected: number }) => void;
  nbPages: number;
  page: number;
};
