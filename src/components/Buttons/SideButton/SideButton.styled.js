import { Link } from "react-router-dom";
import styled from "styled-components";

export const SSideButton = styled(Link)`
  all: unset;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "1.5rem")};
  gap: ${({ gap }) => (gap ? gap : "1.938rem")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  background-color: ${({ secondary }) => (secondary ? "#ffffff" : "#1A1B1C")};
  color: ${({ secondary }) => (secondary ? "#000000" : "#ffffff")};
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    color: ${({ hover }) => (hover ? hover : "#4980C0")};
    svg {
      path {
        stroke: ${({ hover }) => (hover ? hover : "#4980C0")};
      }
    }
  }
`;

export const SSvg = styled.div`
  height: ${({ height }) => (height ? height : "1.5rem")};
`;
