import styled from "styled-components";

export const SAboutProjectView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  color: #ffffff;
`;

export const SAboutProject = styled.div`
  > span {
    font-family: "Helvetica";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin-top: 8.938rem;
  }
  > img {
    position: absolute;
    top: 3.688rem;
    left: 16.188rem;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const STitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin: 8.313rem 0 2.5rem;
`;

export const SAboutSection = styled.section`
  ul {
    margin-top: 2.125rem;
    li {
      font-family: "Noto Sans Georgian";
      margin: 0 5rem;
      font-size: 1rem;
      max-width: 80rem;
      font-weight: 400;
      margin-bottom: 1.875rem;
    }
  }
`;

export const SAboutLine = styled.div`
  margin-top: 17.125rem;
  width: 100%;
  img {
    width: 56.25rem;
    max-width: 60%;
  }
`;

export const SAboutSvg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const StarMiddleSvg = styled.img`
  position: absolute;
  top: 63.188rem;
  right: 13rem;
`;
