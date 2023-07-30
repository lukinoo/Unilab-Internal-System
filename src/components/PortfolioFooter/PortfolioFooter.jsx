import {
  SPorfolioFooterDiv,
  SCircledSocialDiv,
  SParagraph,
  SContactInfoDiv,
  SContactInfoP,
} from "./PortfolioFooter.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";
import { SocialIcon } from "../SocialIcon";
import { withCircle } from "../../hocs/withCircle";
import phoneSvg from "/assets/svg/phone.svg";
import mailSvg from "/assets/svg/mail.svg";

const CircledIcon = withCircle(SocialIcon);

export const PortfolioFooter = ({ gmail, number, links }) => {
  return (
    <SPorfolioFooterDiv>
      <SSecondaryTiTle>კონტაქტი</SSecondaryTiTle>
      <SParagraph>
        <span>დაინტერესდი ჩემთან კოლაბორაციით?</span>
        <span>მზად ვარ ახალი გამოწვევებისთვის</span>
      </SParagraph>
      <SContactInfoDiv>
        <SContactInfoP img={phoneSvg}>+995 333 67 56 43</SContactInfoP>
        <SContactInfoP img={mailSvg}>contact@contact.ge</SContactInfoP>
      </SContactInfoDiv>
      <SCircledSocialDiv>
        <CircledIcon social="github" link={links.github} />
        <CircledIcon social="facebook" link={links.facebook} />
        <CircledIcon social="linkedin" link={links.linkedin} />
        <CircledIcon social="instagram" link={links.instagram} />
      </SCircledSocialDiv>
    </SPorfolioFooterDiv>
  );
};
