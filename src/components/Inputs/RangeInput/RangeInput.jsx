import { SRadioButton, SRangeInputContainer, SRadioDiv, SLine } from "./RangeInput.styled";
import React from "react";

export const RangeInput = ({
  rangeValue,
  firstRangeLabel,
  secondRangeLabel,
}) => {
  const loopArray = Array.from({ length: rangeValue }, (_, index) => index + 1);
  return (
    <SRangeInputContainer>
      {loopArray.map((_, index) => (
        <React.Fragment key={index}>
          <SRadioDiv>
            <SRadioButton
              type="radio"
              name="RatingScale"
            />
            {index === 0 && <p>{firstRangeLabel}</p>}
            {index === loopArray.length - 1 && <p>{secondRangeLabel}</p>}
          </SRadioDiv>
          {index !== loopArray.length - 1 && <SLine />}
        </React.Fragment>
      ))}
    </SRangeInputContainer>
  );
};
