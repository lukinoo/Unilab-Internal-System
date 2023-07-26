import styled from "styled-components"
import { SContainer, SCourseTitle } from "../EditCourse/EditCourse.styled"

export const SPlusIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: -1rem;
`
export const SAddQuestionsMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const STitle = styled(SCourseTitle)`
`

export const SAddQuestionsContainer = styled(SContainer)`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    border-bottom: .0625rem solid rgba(255, 255, 255, 0.50);
    margin-top: 5rem ;
    padding-bottom: 8rem;
  }
  &>:last-child{
    margin-top: 5rem;
  }
`;

export const SInfoText = styled.p`
  color: #ffffff;
  font-size: 1.3rem;
  margin: 3rem 0 4rem;
`