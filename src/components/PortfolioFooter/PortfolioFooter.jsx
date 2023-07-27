import { SPorfolioFooterDiv } from "./PortfolioFooter.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";
import { SocialIcon } from "../SocialIcon";

export const PortfolioFooter = ({ gmail, number, links }) => {
  return (
    <SPorfolioFooterDiv>
      <SSecondaryTiTle>კონტაქტი</SSecondaryTiTle>
      <p>დაინტერესდი ჩემთან კოლაბორაციით? მზად ვარ ახალი გამოწვევებისთვის</p>
      <div>
        <p>+995 333 67 56 43</p>
        <p>contact@contact.ge</p>
      </div>
      <div>
        <SocialIcon social='github' link={links.github} />
        <SocialIcon social='facebook' link={links.facebook} />
        <SocialIcon social='linkedin' link={links.linkedin} />
        <SocialIcon social='instagram' link={links.instagram} />
      </div>
    </SPorfolioFooterDiv>
  );
};
