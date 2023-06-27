import styled from "styled-components";

export const SFlexColumnDiv = styled.div`
  grid-column: ${({ topRight }) => (topRight ? " 4/5" : "")};
  grid-row: ${({ topRight }) => (topRight ? " 1/2" : "")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0 1rem 1.375rem;
  font-size: 1rem;
  cursor: pointer;
  border-left: ${({ topRight }) => (topRight ? " 1px solid #737373" : "none")};
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
  display: ${({ item }) => (item ? "grid" : "flex")};
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  padding: 3.25rem 3.75rem;
  gap: 4.563rem;
  min-height: 13rem;
  border: 1px dashed white;
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
  gap: 1.187rem;
  visibility: hidden;
  cursor: default;
`;
