import styled from "styled-components";

export const SUploaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5.125rem;
`;

export const SInputWrapper = styled.div`
  max-width: 18.25rem;
  margin-top: 3.625rem;
  display: flex;
  flex-direction: column;
  gap: 0.437rem;
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

export const SDeleteIcon = styled.div`
  width: 4.4375rem;
  height: 2.437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;

  &:hover {
    background-color: red;

    svg {
      path {
        stroke: white;
      }
    }
  }
`;

export const SDownloadICon = styled.div`
  width: 4.4375rem;
  height: 2.437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
`;

export const SUploader = styled.form`
  position: relative;
  width: 18.25rem;
  height: 9.812rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ffffff;
  border-radius: 0.625rem;
  cursor: pointer;
  overflow: hidden;

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

export const STitle = styled.p`
  font-size: 0.75rem;
`;

export const SDesk = styled.span`
  font-size: 0.688rem;
  font-style: italic;
  display: block;
`;

export const UploadContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
`;

export const SFileUpload = styled.div`
  position: relative;
`;

export const SCloudUpload = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;
