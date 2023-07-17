import { SRangeLabelInput, SRangeLabelInputDiv, SRangeLabel, SBottomLabel } from "./RangeLabelInput.styled";

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
      <SBottomLabel>რას ნიშნავს სკალაზე {number}?</SBottomLabel>
    </SRangeLabelInputDiv>
  );
};
