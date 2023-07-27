import { SPorfolioFooterDiv, SCircledSocialDiv } from "./PortfolioFooter.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";
import { SocialIcon } from "../SocialIcon";
import { withCircle } from "../../hocs/withCircle";

const CircledIcon = withCircle(SocialIcon);

export const PortfolioFooter = ({ gmail, number, links }) => {
  return (
    <SPorfolioFooterDiv>
      <SSecondaryTiTle>კონტაქტი</SSecondaryTiTle>
      <p>დაინტერესდი ჩემთან კოლაბორაციით? მზად ვარ ახალი გამოწვევებისთვის</p>
      <div>
        <p>+995 333 67 56 43</p>
        <p>contact@contact.ge</p>
      </div>
      <SCircledSocialDiv>
        <CircledIcon social='github' link={links.github}/>
        <CircledIcon social='facebook' link={links.facebook} />
        <CircledIcon social='linkedin' link={links.linkedin} />
        <CircledIcon social='instagram' link={links.instagram} />
      </SCircledSocialDiv>
    </SPorfolioFooterDiv>
  );
};
