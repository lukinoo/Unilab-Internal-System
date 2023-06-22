import styled from "styled-components";

export const SContributorsSlider = styled.div`
  > .slick-slider > .slick-prev,
  .slick-next {
  }
  margin: 8.938rem auto;

  width: 95vw;
  > span {
    font-size: 1.125rem;
    color: #ffffff;
  }
`;

export const SContributorsCard = styled.div`
  position: relative;
  display: flex;
  text-align: center;
`;

export const SContributorsInfo = styled.div`
  > span {
    margin-top: 4.938rem;
  }
  display: flex;
  align-content: center;
  justify-content: center;
  position: relative;
`;

export const SContributorsImg = styled.img`
  width: 14.188rem;
  margin: 0;
  pointer-events: none;
  border-radius: 0.375rem;
`;

export const SContributorsImgContainer = styled.div`
  position: relative;
  padding: 1.406rem 0;
`;

export const SVectorTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: -1.406rem;
`;

export const SVectorBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: -1.406rem;
`;
export const SContributorsFullname = styled.div`
  margin-top: 4rem;
  > span {
    font-size: 1.125rem;
    color: #ffffff;
    font-family: "Helvetica";
    font-weight: 400;
  }
`;

export const SLineSegment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const SPositionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  > span {
    color: #ffffff;
    text-align: center;
    font-size: 1.125rem;
    font-family: "Helvetica";
  }
`;
export const SPositionWrapper = styled.div`
  position: relative;
  padding: 0.725rem 1.188rem;
`;
export const SPositionVectorTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const SPositionVectorBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
