import React from 'react'
import { SActiveCourses, SCoursesInfo, SCoursesInfoContainer, SCurrentCourses } from './CoursesInfo.styled'
import { FourthHeader } from '../../components/Headers/FourthHeader'
import { CoursesSlider } from '../../components/CoursesSlider'
import { SAboutLine } from '../AboutProject/AboutProject.styled'
import { Footer } from '../../components/Footer'

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
        <SCurrentCourses>
          <span>მიმდინარე კურსები</span>
          <CoursesSlider margin={"6.25rem 0 8.75rem"}/>
        </SCurrentCourses>
        <Footer />
      </SCoursesInfoContainer>
    </SCoursesInfo>
  )
}
