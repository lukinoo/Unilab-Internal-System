import styled from "styled-components";
import starTopSvg from "/assets/svg/starTop.svg";
import starBottomSvg from "/assets/svg/starBottom.svg";
import starRecoverySvg from "/assets/svg/starRecoveryBottom.svg";
import starLeftTopSvg from "/assets/svg/RStarLeftTop.svg";
import starLeftBottomSvg from "/assets/svg/RStarLeftBottom.svg";

const obj = {
  1: starTopSvg,
  2: starBottomSvg,
  3: starRecoverySvg,
  4: starLeftTopSvg,
  5: starLeftBottomSvg,
};

export const Star = ({ number, top, left, width, height }) => {
  return <SStar src={obj[number]} top={top} left={left} />;
};

const SStar = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
