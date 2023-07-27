import {
  SInternInfoContainer,
  SNameAndOccupationDiv,
  SName,
  SOccupation,
  SDescription,
  SImageDiv,
  SImageAndTextDiv,
  SInfoDiv,
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
        </SImageDiv>
        <SInfoDiv>
          <SNameAndOccupationDiv>
            <SName>{name}</SName>
            <SOccupation>{occupation}</SOccupation>
          </SNameAndOccupationDiv>
          <SDescription>{description}</SDescription>
        </SInfoDiv>
      </SImageAndTextDiv>
      {/* Button here */}
      {/* Social Links */}
    </SInternInfoContainer>
  );
};
