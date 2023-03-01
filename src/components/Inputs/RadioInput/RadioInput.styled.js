import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SInputWrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
`;

export const SInput = styled.input`
  appearance: none;
  width: 1rem;
  height: 1rem;
  background-color: transparent;
  border: solid 2px #ffffff;
  border-radius: 50%;
  cursor: pointer;
`;

export const SCheckWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
`;

export const SLabel = styled.label`
  font-size: 0.6875rem;
  width: fit-content;
  color: #ebebeb;
  cursor: pointer;
  height: fit-content;
`;
