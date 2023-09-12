import styled from "styled-components";

export const SPorfolioFooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20rem; // temporary
  margin-bottom: 12.5rem;
  min-height: 30rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: #ffffff;
`;
export const SCircledSocialDiv = styled.div`
  display: flex;
  width: 19.75rem;
  justify-content: space-between;
`;
export const SParagraph = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SContactInfoDiv = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 40rem;
`;

export const SContactInfoP = styled.p`
  background-image: url(${({ img }) => img});
  padding-left: 3rem;
  background-position: left;
  background-repeat: no-repeat;
`;
