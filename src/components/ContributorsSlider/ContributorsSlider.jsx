import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  SContributorsCard,
  SContributorsFullname,
  SContributorsImg,
  SContributorsImgContainer,
  SContributorsInfo,
  SContributorsSlider,
  SLineSegment,
  SPositionContainer,
  SPositionVectorBottom,
  SPositionVectorTop,
  SPositionWrapper,
  SVectorBottomRight,
  SVectorTopLeft,
} from "./ContributorsSlider.styled";
import { ContributorsData } from "../../data";
import { settings } from "./sliderSettings";
export const ContributorsSlider = () => {

  return (
    <SContributorsSlider>
      <Slider {...settings}>
        {ContributorsData.map(({ id, fullname, position, src }) => (
          <SContributorsCard key={id}>
            <SContributorsInfo>
              <SContributorsImgContainer>
                <SContributorsImg src={src} alt="" />
                <SVectorTopLeft>
                  <img src="assets/svg/vectorTopLeft.svg" />
                </SVectorTopLeft>
                <SVectorBottomRight>
                  <img src="assets/svg/vectorBottomRight.svg" alt="" />
                </SVectorBottomRight>
              </SContributorsImgContainer>
            </SContributorsInfo>
            <SContributorsFullname>
              <span>{fullname}</span>
            </SContributorsFullname>
            <SLineSegment>
              <img src="assets/svg/lineSegment.svg" alt="" />
            </SLineSegment>
            <SPositionContainer>
              <SPositionWrapper>
                <span>{position}</span>
                <SPositionVectorBottom>
                  <img src="assets/svg/vectorBottom.svg" alt="" />
                </SPositionVectorBottom>
                <SPositionVectorTop>
                  <img src="assets/svg/vectorTop.svg" alt="" />
                </SPositionVectorTop>
              </SPositionWrapper>
            </SPositionContainer>
          </SContributorsCard>
        ))}
      </Slider>
    </SContributorsSlider>
  );
};
