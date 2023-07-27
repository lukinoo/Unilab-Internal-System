import { SocialIcon } from "../SocialIcon";
import {
  SInternInfoContainer,
  SNameAndOccupationDiv,
  SName,
  SOccupation,
  SDescription,
  SImageDiv,
  SImageAndTextDiv,
  SInfoDiv,
  SContactButton,
  SSocialDiv,
  SLine
} from "./InternInfoContainer.styled";

export const InternInfoContainer = ({
  name,
  occupation,
  description,
  imgUrl,
  links, // Social Links object
}) => {
  return (
    <SInternInfoContainer>
      <SImageAndTextDiv>
        <SImageDiv>
          <img src={imgUrl} alt={name} />
          <SContactButton>დამიკავშირდით</SContactButton>
        </SImageDiv>
        <SInfoDiv>
          <SNameAndOccupationDiv>
            <SName>{name}</SName>
            <SOccupation>{occupation}</SOccupation>
          </SNameAndOccupationDiv>
          <SDescription>{description}</SDescription>
        </SInfoDiv>
      </SImageAndTextDiv>
      {/* Social Links */}
      <SSocialDiv>
        <SocialIcon social='github' link={links.github} />
        <SocialIcon social='facebook' link={links.facebook} />
        <SocialIcon social='linkedin' link={links.linkedin} />
        <SocialIcon social='instagram' link={links.instagram} />
        <SLine />
      </SSocialDiv>
    </SInternInfoContainer>
  );
};
