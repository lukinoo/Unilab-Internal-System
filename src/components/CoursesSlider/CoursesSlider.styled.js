import styled from "styled-components";
import { SContributorsCard, SContributorsInfo } from "../ContributorsSlider/ContributorsSlider.styled";

export const SCoursesSlider = styled.div`
  width: 95vw;
`

export const SCoursesSliderCard = styled(SContributorsCard)`
`

export const SCoursesSliderCardInfo = styled(SContributorsInfo)`
`

export const SCoursesSliderImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 20rem;
  width: 15.625rem;
`

export const SCoursesSliderImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SCoursesSliderImg = styled.img`
  object-fit: cover;
`

export const SCoursesSliderCardVectorLeft = styled.div`
  position: absolute;
  top: .75rem;
  left: .875rem;
`

export const SCoursesSliderCardVectorRight = styled.div`
  position: absolute;
  bottom: .75rem;
  right: .875rem;
  rotate: 180deg;
`

export const SCoursesSliderDashedTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

export const SCoursesSliderDashedBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  rotate: 180deg;
`