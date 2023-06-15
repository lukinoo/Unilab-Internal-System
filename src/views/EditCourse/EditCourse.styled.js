import styled from "styled-components";
import plusCircle from "/assets/svg/plusCircle.svg";

export const SEditCourseMainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SCourseTitle = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  font-weight: 400;
  font-size: 1.875rem;
  text-align: center;
  margin: 5.6rem 0 4.3rem;
  color: #ffffff;
`;

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 62.5rem;
  width: 70%;
  align-self: center;
  justify-content: center;
  margin-bottom: 17rem;
`;
export const SGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 5.5rem;
`;
export const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.5rem;
  margin-bottom: 15rem;
`;
export const SAddDescButton = styled.button`
  width: ${({width})=>width};
  border: none;
  height: 2.5rem;
  margin-top: 1.2rem;
  background-color: inherit;
  background-image: url(${plusCircle});
  background-position: left;
  background-repeat: no-repeat;
  color: #4980C0;
  cursor: pointer;
`