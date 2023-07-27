import { Button } from "../Button/Button";
import {
  SInternInfoContainer,
  SNameAndOccupationDiv,
  SName,
  SOccupation,
  SDescription,
  SImageDiv,
  SImageAndTextDiv,
  SInfoDiv,
  SContactButton
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
    </SInternInfoContainer>
  );
};
