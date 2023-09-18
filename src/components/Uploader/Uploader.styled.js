import styled from "styled-components";

export const SUploaderDiv = styled.div`
  &>p{
    margin-bottom: 0.875rem;
  }
`

export const SFlexColumnDiv = styled.div`
  grid-column: ${({ topLeft }) => (topLeft ? " 1/2" : "")};
  grid-row: ${({ topLeft }) => (topLeft ? " 1/2" : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  font-size: 1rem;
  cursor: pointer;
  border-right: ${({ topLeft }) => (topLeft ? " 1px solid #737373" : "none")};
`;

export const SUploadedFile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 2px solid #2984ce;
  border-radius: 0.375rem;
  padding: 1rem 1.375rem;
  position: relative;

  ${({ active }) =>
    active &&
    `
    border:2px solid #2984CE;
    &:hover {
      ${SOverlay} {
        background: rgba(255, 255, 255, 0.7);
        visibility: visible;
      }
    }
    `}
`;

export const SUploaderWrapper = styled.div`
  width: 100%;
  min-width: 64.4375rem;
  min-height: 15.1875rem;
  display: ${({ item }) => (item ? "grid" : "flex")};
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 3.25rem 3.75rem;
  gap: 4.563rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23ffffff' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 0.625rem;
`;

export const SOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  gap: 1.187rem;
  visibility: hidden;
  cursor: default;
`;
export const SImg = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.25rem;
  object-fit: cover;
`
export const SUploadedImgDiv = styled(SUploadedFile)`
  border: none;
  padding: 0;
  width: fit-content;
`