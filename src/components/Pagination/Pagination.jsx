import { SPaginationDiv, SPageNumber } from "./Pagination.styled";

export const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const numbersArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <SPaginationDiv>
      {numbersArray.map((number) => (
        <SPageNumber
          key={number}
          active={number === currentPage}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </SPageNumber>
      ))}
    </SPaginationDiv>
  );
}
