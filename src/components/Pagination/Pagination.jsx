import { SPaginationDiv, SPageNumber } from "./Pagination.styled";

const ACTIONS = [-2, -1, 0, 1, 2];
export const Pagination = ({
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const numbersArray = Array.from({ length: totalPages }, (_, index) => index + 1);
  console.log("NUMBERS ARR:",numbersArray)
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
