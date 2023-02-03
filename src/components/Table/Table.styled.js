import styled from "styled-components";
import ReactPaginate from "react-paginate";

export const STable = styled.table`
  display: block;
  background-color: #fff;
  color: #141416;
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
  max-width: 100%;
  font-size: 0.875rem;
  overflow-x: auto;
  margin: 0 auto;
`;

export const SHead = styled.thead`
  cursor: pointer;
  box-shadow: inset 0px -3px 0px -1px #315c8e;
`;

export const SBody = styled.tbody``;

export const SHeadCell = styled.th`
  padding: 1.75rem;
  min-width: 200px;
  text-align: center;
`;

export const SBodyCell = styled.td`
  padding: 1.75rem;
  min-width: 200px;
  text-align: center;
`;

export const SRow = styled.tr`
  white-space: nowrap;

  &:nth-child(even) {
    background-color: #fafafa;
  }

  &:last-child td:first-child {
    border-bottom-left-radius: 10px;
  }

  &:last-child td:last-child {
    border-bottom-right-radius: 10px;
  }
`;

export const SPagination = styled(ReactPaginate)`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 3.75rem auto;
  gap: 1rem;
  color: #fff;

  & li {
    font-size: 1.125rem;
    cursor: pointer;
  }

  & img {
    vertical-align: middle;
  }

  & .active {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const SHeaderContent = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

export const SPaddingRow = styled.tr`
  color: transparent;
  box-shadow: inset -1px 1px 0px 1px ${({ isFirst }) => (isFirst ? "#f1f1f1" : "transparent")};
`;

export const SPaginationArrow = styled.img`
  width: 8px;
  height: 14px;
`;
