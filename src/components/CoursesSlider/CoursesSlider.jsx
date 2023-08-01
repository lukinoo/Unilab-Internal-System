import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SCoursesSlider,
  SCoursesSliderCard,
  SCoursesSliderCardButtonWrapper,
  SCoursesSliderCardInfo,
  SCoursesSliderCardTitleButton,
  SCoursesSliderCardVectorLeft,
  SCoursesSliderCardVectorRight,
  SCoursesSliderDashedBottom,
  SCoursesSliderDashedTop,
  SCoursesSliderImg,
  SCoursesSliderImgContainer,
  SCoursesSliderImgWrapper,
} from "./CoursesSlider.styled";
import { activeCoursesData } from "../../data";
import { Button } from "../Button";
import { CustomNextArrow, CustomPrevArrow } from "../ContributorsSlider/CustomArrows/CustomArrows";

export const CoursesSlider = ({margin}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <SCoursesSlider margin={margin}>
      <Slider {...settings}>
        {activeCoursesData.map(({ id, title, src }) => (
          <SCoursesSliderCard key={id}>
            <SCoursesSliderCardInfo>
              <SCoursesSliderImgContainer>
                <SCoursesSliderImgWrapper>
                  <SCoursesSliderImg src={src} alt={title} />
                </SCoursesSliderImgWrapper>
                <SCoursesSliderCardVectorLeft>
                  <img src="assets/svg/vectorLeft.svg" alt="" />
                </SCoursesSliderCardVectorLeft>
                <SCoursesSliderCardVectorRight>
                  <img src="assets/svg/vectorLeft.svg" alt="" />
                </SCoursesSliderCardVectorRight>
                <SCoursesSliderDashedTop>
                  <img src="assets/svg/dashedTop.svg" alt="" />
                </SCoursesSliderDashedTop>
                <SCoursesSliderDashedBottom>
                  <img src="assets/svg/dashedTop.svg" alt="" />
                </SCoursesSliderDashedBottom>
              </SCoursesSliderImgContainer>
            </SCoursesSliderCardInfo>
            <SCoursesSliderCardTitleButton>
              <span>{title}</span>
            </SCoursesSliderCardTitleButton>
            <SCoursesSliderCardButtonWrapper>
              <Button width={"15.625rem"}>
                დეტალურად
              </Button>
            </SCoursesSliderCardButtonWrapper>
            
          </SCoursesSliderCard>
        ))}
      </Slider>
    </SCoursesSlider>
  );
};
