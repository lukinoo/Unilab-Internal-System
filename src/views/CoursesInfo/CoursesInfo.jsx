import React from 'react'
import { SActiveCourses, SCoursesInfo, SCoursesInfoContainer } from './CoursesInfo.styled'
import { FourthHeader } from '../../components/Headers/FourthHeader'
import { CoursesSlider } from '../../components/CoursesSlider'
import { SAboutLine } from '../AboutProject/AboutProject.styled'

export const CoursesInfo = () => {
  return (
    <SCoursesInfo>
      <FourthHeader />
      <SCoursesInfoContainer>
        <SActiveCourses>
          <span>აქტიური კონკურსები</span>
          <CoursesSlider />
        </SActiveCourses>
        <SAboutLine marginTop={"9rem"}>
          <img src="/assets/svg/lineLeft.svg" alt="lineLeft" />
        </SAboutLine>
      </SCoursesInfoContainer>
    </SCoursesInfo>
  )
}
