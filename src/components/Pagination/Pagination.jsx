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
      {currentPage - 2 > 0 &&   <SDoubleArrow left onClick={()=>handlePageChange(currentPage - 2)}/>}
      {currentPage - 1 > 0 &&  <SArrow left onClick={()=>handlePageChange(currentPage - 1)}/>}
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
      {currentPage + 1 <= totalPages &&  <SArrow onClick={()=>handlePageChange(currentPage + 1)}/>}
      {currentPage + 2 <= totalPages &&   <SDoubleArrow onClick={()=>handlePageChange(currentPage + 2)}/>}
    </SPaginationDiv>
  );
};
