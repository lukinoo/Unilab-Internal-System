import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SFourthHeader = styled.header`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  box-shadow: 0rem 0rem 0.125rem 0.063rem #ecececd4;
  min-height: 6.25rem;
  color: #ffffff;
`;

export const SHeaderUnilabLogo = styled(Link)`
  display: flex;
  grid-area: auto / 2 / auto / 3;
  img {
    width: 2.5rem;
    height: 3.1rem;
  }
`;

export const SHeaderProperty = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1rem;
`;

export const SProfileDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 6.25rem;
  height: 3.75rem;
  padding: 0.43rem;
  background-color: #373737;
  border-radius: 1.8rem;
  gap: 0.25rem;
  position: relative;
  cursor: pointer;
`;

export const SProfilePicture = styled.img`
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 1.8rem;
`;

export const SProfileChevronWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const SLanguageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const SLanguageText = styled.p``;

export const SLanguageDropDown = styled.img`
  width: 0.625rem;
  height: 0.375rem;
`;

export const SPopup = styled(motion.div)`
  position: absolute;
  left: 75%;
  transform: translateX(-50%);
  margin-top: 1.31rem;
  cursor: auto;
`;

export const SPopupDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75rem;
  height: 10.688rem;
  color: #373737;
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 12px;
  position: relative;
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    right: 8.75rem;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-style: solid;
    border-color: #fff transparent;
    border-width: 0 10px 10px 10px;
    top: -9px;
  }
  &:before {
    border-color: #fff transparent;
    top: -0.625rem;
    right: 8.75rem;
  }
`;

export const SUserName = styled.h4`
  display: flex;
  text-align: center;
  margin: 1.25rem 0 0.75rem;
  width: 8rem;
  height: 1.313rem;
  font-weight: 400;
  font-size: 1rem;
  color: #2984ce;
`;

export const SUserProperty = styled.div`
  display: flex;
  flex-direction: column;
  width: 16.25rem;
  gap: 1.25rem;
  color: #373737;
`;

export const SUserBorder = styled.div`
  border: 1px solid #ebebeb;
`;

export const SMyAccount = styled.div`
  display: flex;
  gap: 1.25rem;
  cursor: pointer;
`;

export const SMyAccountImg = styled.img`
  width: 1.375rem;
  height: 1.375rem;
`;

export const SLogOut = styled.div`
  display: flex;
  gap: 1.25rem;
  cursor: pointer;
`;

export const SLogOutImg = styled.img`
  width: 1.375rem;
  height: 1.375rem;
`;
