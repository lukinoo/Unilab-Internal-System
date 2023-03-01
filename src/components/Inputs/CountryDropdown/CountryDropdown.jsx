import React from "react";
import { Dropdown } from "../Dropdown";
import { SCountryIconContainer, SIcon } from "./CountryDropdown.styled";

export const CountryDropdown = (props) => {
  return (
    <Dropdown
      {...props}
      LeftComponent={
        <SCountryIconContainer>
          <SIcon
            src="https://cdn.countryflags.com/thumbs/georgia/flag-round-250.png"
            alt="country flag"
          />
        </SCountryIconContainer>
      }
    />
  );
};
