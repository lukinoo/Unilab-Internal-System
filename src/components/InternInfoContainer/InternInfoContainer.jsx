import { SInternInfoContainer, SNameAndOccupationDiv, SName, SOccupation, SDescription, SImage  } from "./InternInfoContainer.styled";

export const InternInfoContainer = ({
  name,
  occupation,
  description,
  imgUrl,
  links // Social Links object
}) => {
  return (
    <SInternInfoContainer>
      <div>

        <SImage src={imgUrl} alt={name} />
        <div>
          <SNameAndOccupationDiv>
              <SName>{name}</SName>
              <SOccupation>{occupation}</SOccupation>
          </SNameAndOccupationDiv>
          <SDescription>
            {description}
          </SDescription>
        </div>
      </div>
      {/* Button here */}
      {/* Social Links */}
    </SInternInfoContainer>
  )
}
