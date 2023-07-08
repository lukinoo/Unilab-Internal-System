import { SRangeLabelInput, SRangeLabelInputDiv, SRangeLabel } from "./RangeLabelInput.styled";

export const RangeLabelInput = ({
  displayLabel,
  action,
  number,
}) => {

  const handleInputChange = (e) =>{
    action(e.target.value);
  }

  return (
    <SRangeLabelInputDiv>
      {displayLabel && <SRangeLabel>სკალის მნიშვნელობა</SRangeLabel>}
      <SRangeLabelInput onChange={handleInputChange}/>
      <p>რას ნიშნავს სკალაზე {number}?</p>
    </SRangeLabelInputDiv>
  );
};
