import styled from "styled-components";
import { SDeleteIcon } from "../SingleUploader/SingleUploader.styled";

export const SAnotherDirWrapper = styled.div`
  margin: 7.062rem auto;
  max-width: 72.062rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8.375rem;
`;
export const SEditIcon = styled.div`
  width: 4.4375rem;
  height: 2.437rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 0.375rem;
`;

export const SOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.187rem;
  visibility: hidden;

  ${({ active }) =>
    active &&
    `
      background: rgba(255, 255, 255, 0.7);
      visibility: visible;
    `}
`;

export const SAnotherDirection = styled.div`
  position: relative;
  max-width: 18.437rem;
  height: 6.312rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0 1rem;
  border: 2px solid #2984ce;
  border-radius: 0.6rem;
  overflow: hidden;

  &:hover {
    ${SEditIcon},${SDeleteIcon} {
      cursor: pointer;
    }
  }

  a {
    text-align: center;
    color: white;
    text-decoration: none;
  }
`;

export const SIcon = styled.div`
  cursor: pointer;
`;
