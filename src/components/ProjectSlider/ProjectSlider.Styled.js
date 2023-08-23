import styled from "styled-components";

export const SProjectDiv = styled.div`
  margin: 6.25rem 0rem 15rem;
  > .slick-slider > .slick-dots > li > button {
    &:before {
      font-size: 0.75rem;
      color: #ffffff;
    }
  }
`;

export const SProjectCard = styled.div`
  margin-bottom: 2.6rem;
  outline: 0;
  outline: none;
`;

export const SProjectImg = styled.img`
  width: 1240px;
  height: ${({imgHeight})=>imgHeight ? imgHeight : '28.125rem'};
  margin: 0 auto;
  pointer-events: none;
`;
