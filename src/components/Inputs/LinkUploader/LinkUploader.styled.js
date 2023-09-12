import styled from "styled-components";

export const SOverlay = styled.div`
  position: absolute;
  display: none;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  align-items: center;
  justify-content: space-around;
`;
export const SLinkUploader = styled.div`
  position: relative;
  width: 18.4375rem;
  height: 6.3125rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #2984ce;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    ${SOverlay} {
      display: flex;
      background: rgba(255, 255, 255, 0.7);
    }
  }
`;
const SIcon = styled.img`
  cursor: pointer;
`;

export const SLInkIcon = styled(SIcon)`
  margin-left: 1.5rem;
`;
export const SEditIcon = styled(SIcon)`
  filter: invert(100%);
`;
export const SDeleteIcon = styled(SEditIcon)``;
export const SIconWrapper = styled.div`
  border-radius: 0.375rem;
  padding: 0.5rem 1.5rem;
  background-color: #ffffff;
  cursor: pointer;
`;
export const SIconsDiv = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
