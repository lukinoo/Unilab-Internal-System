import { SRadioButton, SRangeInputContainer, SRadioDiv, SLine } from "./RangeInput.styled";

export const RangeInput = ({
  rangeValue,
  name,
  firstRangeLabel,
  secondRangeLabel,
}) => {
  const loopArray = Array.from({ length: rangeValue }, (_, index) => index + 1);
  return (
    <SRangeInputContainer>
      {loopArray.map((_, index) => (
        <>
          <SRadioDiv>
            <SRadioButton type="radio" name={name} key={index} />
            {index === 0 && <p>{firstRangeLabel}</p>}
            {index === loopArray.length - 1 && <p>{secondRangeLabel}</p>}
          </SRadioDiv>
          {index !== loopArray.length - 1 && <SLine />}
        </>
      ))}
    </SRangeInputContainer>
  );
};
