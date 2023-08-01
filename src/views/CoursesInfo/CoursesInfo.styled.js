import styled from "styled-components";
import { SAboutProject } from "../AboutProject/AboutProject.styled";

export const SCoursesInfo = styled.div`
  color: #ffffff;
  height: 100vh;
`

export const SActiveCourses = styled(SAboutProject)`
  > span {
    margin: 6.875rem 0 13rem ;
  }
`
export const SCoursesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SCurrentCourses = styled(SAboutProject)`
  > span {
    margin: 6.875rem 0 13rem ;
  }
`