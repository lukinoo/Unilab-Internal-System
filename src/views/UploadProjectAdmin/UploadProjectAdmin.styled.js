import styled from "styled-components";

export const SBgStarTopRight = styled.div`
  position: absolute;
  top: 33rem;
  right: 6.54rem;
`;

export const SContentWrapper = styled.form`
  margin: 0 auto 29rem auto;
  max-width: 64.438rem;
  display: flex;
  flex-direction: column;
  color: #ffffff;
`;

export const STitle = styled.h1`
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "4.188rem")};
  text-align: center;
  font-weight: ${(fontWeight) => (fontWeight ? fontWeight : "400")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.875rem")};
`;

export const SInputWrapper = styled.div`
  position: relative;
  margin-top: 5.438rem;
`;

export const STeamContainer = styled.div`
  width: 100%;
  margin: 4.25rem auto 0 auto;
`;

export const STeamMember = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SPositionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.563rem;
  margin: 5.5rem auto 0 auto;
`;
export const SAdditionalDataDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 3rem;
  margin: 5rem 0;
`