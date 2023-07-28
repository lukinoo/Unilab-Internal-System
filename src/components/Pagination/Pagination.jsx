import {
  SPaginationDiv,
  SPageNumber,
  SDoubleArrow,
  SNumbersDiv,
  SArrow,
} from "./Pagination.styled";

export const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const numbersArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  return (
    <SPaginationDiv>
      <SDoubleArrow left />
      <SArrow left />
      <SNumbersDiv>

        {numbersArray.map((number) => (
          <SPageNumber
            key={number}
            active={number === currentPage}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </SPageNumber>
        ))}
      </SNumbersDiv>
      <SArrow />
      <SDoubleArrow />
    </SPaginationDiv>
  );
};
