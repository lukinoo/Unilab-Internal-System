import { useState } from "react";
import { Header } from "../../components/Headers/Header";
import { Input } from "../../components/Inputs/Input";
import { Button } from "../../components/Button";

import {
  SRecoveryPasswordView,
  SDescription,
  SForm,
  SMarginTop,
  STitle,
  SAuthenticationSvgs,
  SVektorRecoveryRight,
  SStarRecoveryBottom,
} from "./RecoveryPassword.styled";
import { useForm } from "react-hook-form";

export const RecoveryPassword = () => {
  const { register } = useForm();

  return (
    <SRecoveryPasswordView>
      <Header />
      <SForm>
        <STitle>პაროლის აღდგენა</STitle>
        <SDescription>
          მიუთითე შენი ელ-ფოსტა, სადაც მიიღებ ინსტრუქციას პაროლის აღდგენის
          შესახებ
        </SDescription>
        <Input
          type="email"
          name="email"
          label="ელ-ფოსტა"
          width="21.25rem"
          placeholder="info@unilab.ge"
          register={register}
        />
        <SMarginTop></SMarginTop>
        <Button margin="0 0 6.25rem" width="21.25rem">
          გაგზავნა
        </Button>
      </SForm>
      <SAuthenticationSvgs>
        <SVektorRecoveryRight
          src="/assets/svg/vektorRecoveryRight.svg"
          alt="vector"
        />
        <SStarRecoveryBottom
          src="/assets/svg/StarRecoveryBottom.svg"
          alt="starTop"
        />
      </SAuthenticationSvgs>
    </SRecoveryPasswordView>
  );
};
