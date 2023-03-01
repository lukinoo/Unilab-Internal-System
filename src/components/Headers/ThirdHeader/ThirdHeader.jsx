import React from "react";
import { IconPair } from "../../IconPair";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  SThirdHeader,
  SIconPairPart,
  SHomePart,
  SHomePartIcon,
  SHomePartTitle,
  SRegistrationPart,
  SAuthenticationLink,
  SAuthenticationIcon,
} from "./ThirdHeader.styled";

export const ThirdHeader = () => {
  return (
    <SThirdHeader>
      <SIconPairPart>
        <IconPair width="auto" height="5rem" gap="2.5rem" />
      </SIconPairPart>
      <SHomePart>
        <SHomePartIcon src="assets/svg/home.svg" alt="home" />
        <SHomePartTitle>უნილაბის შიდა სისტემა</SHomePartTitle>
      </SHomePart>
      <SRegistrationPart>
        <SAuthenticationLink to="/authentication">
          <SAuthenticationIcon src="assets/svg/log-in.svg" alt="login" />
        </SAuthenticationLink>
        <Link to="/registration">
          <Button width="12rem">რეგისტრაცია</Button>
        </Link>
      </SRegistrationPart>
    </SThirdHeader>
  );
};
