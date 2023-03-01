import React from "react";
import { SecondHeader } from "../../components/Headers/SecondHeader";
import { RegistrationForm } from "../../components/RegistrationForm";
import {
  SRegistrationMainDiv,
  SRegistrationSvgs,
  SStarLeftTop,
  SStarLeftBottom,
  SVectorRight,
} from "./Registration.styled";
import { RegistrationProvider } from "../../context/RegistrationContext";

export const Registration = () => {
  return (
    <SRegistrationMainDiv>
      <SecondHeader />
      <RegistrationProvider>
        <RegistrationForm />
      </RegistrationProvider>
      <SRegistrationSvgs>
        <SStarLeftTop
          src="assets/svg/RStarLeftBottom.svg"
          alt="StarLeftBottom"
        />
        <SStarLeftBottom
          src="assets/svg/RStarLeftTop.svg"
          alt="StarLeftTop"
          layout
        />
        <SVectorRight
          src="assets/svg/RVectorRight.svg"
          alt="VectorRight"
          layout
        />
      </SRegistrationSvgs>
    </SRegistrationMainDiv>
  );
};
