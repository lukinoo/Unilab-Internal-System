import React from "react";
import { Input } from "../Input";
import { SCountryCode } from "./PhoneNumberInput.styled.js";
import { handleNumberChange } from "../../../utils/phoneNumber";

const patterns = {
  995: "--- --- ---",
};

export const PhoneNumberInput = (props) => {
  const { countryCode } = props;

  const handleChange = (e) => {
    handleNumberChange(e, patterns, countryCode);
  };

  return (
    <Input
      {...props}
      type={"tel"}
      placeholder={patterns[countryCode]}
      onChange={handleChange}
      LeftComponent={<SCountryCode>+{countryCode}</SCountryCode>}
    />
  );
};
