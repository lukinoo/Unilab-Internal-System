import styled from "styled-components";

export const SFormHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SFormHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  margin-right: ${({marginRight})=>marginRight ? '3.5625rem' : '0'};
  margin-bottom: 3rem;
`;
