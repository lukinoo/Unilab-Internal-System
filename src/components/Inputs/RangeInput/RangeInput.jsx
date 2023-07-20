import { SRadioButton, SRangeInputContainer, SRadioDiv, SLine } from "./RangeInput.styled";

export const RangeInput = ({
  rangeValue,
  firstRangeLabel,
  secondRangeLabel,
  markAnswer
}) => {
  const loopArray = Array.from({ length: rangeValue }, (_, index) => index + 1);
  return (
    <SRangeInputContainer>
      {loopArray.map((value, index) => (
        <>
          <SRadioDiv>
            <SRadioButton
              type="radio"
              name="RatingScale"
              key={index}
              onClick={() => markAnswer(value)}
            />
            {index === 0 && <p>{firstRangeLabel}</p>}
            {index === loopArray.length - 1 && <p>{secondRangeLabel}</p>}
          </SRadioDiv>
          {index !== loopArray.length - 1 && <SLine />}
        </>
      ))}
    </SRangeInputContainer>
  );
};
