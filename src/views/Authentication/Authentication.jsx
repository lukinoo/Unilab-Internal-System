import React, { useState } from "react";
import { Header } from "../../components/Headers/Header";
import { Input } from "../../components/Inputs/Input";
import { PasswordInput } from "../../components/Inputs/PasswordInput";
import { Checkbox } from "../../components/Inputs/Checkbox/Checkbox";
import { Button } from "../../components/Button";
import {
  SAuthenticationView,
  SDescription,
  SForgotPasswordLink,
  SForm,
  SInputWrapper,
  SRegistrationLink,
  SRegistrationText,
  SRememberWrapper,
  SError,
  STitle,
  SAuthenticationSvgs,
  SVectorSvg,
  StarTopSvg,
  StarBottomSvg,
} from "./Authentication.styled";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";

export const Authentication = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(authenticationSchema),
    mode: "all",
    delayError: 500,
  });

  const [serverErrors, setServerErrors] = useState(null);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    delete data.remember; // We will need this later for keeping the user logged in

    axios
      .post("http://127.0.0.1:5000/Authorization", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.statusText !== "OK") return;
        navigate("/");
      })
      .catch((err) => {
        if (!err.response.data) return console.log(err);

        console.log(err.response.data);
        setServerErrors(err.response.data);
      });
  };

  return (
    <SAuthenticationView>
      <Header />
      <SForm onSubmit={handleSubmit(onSubmit)}>
        <STitle>გამარჯობა</STitle>
        <SDescription>
          უნილაბის სამართავ პანელში მოსახვედრად, გთხოვთ გაიაროთ ავტორიზაცია
        </SDescription>
        <SInputWrapper>
          <Input
            id="email"
            type="email"
            name="email"
            label="ელ-ფოსტა"
            width="21.25rem"
            placeholder="info@unilab.ge"
            register={register}
            errors={errors}
          />
          <PasswordInput
            id="password"
            name="password"
            label="პაროლი"
            width={"21.25rem"}
            placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗"
            register={register}
            errors={errors}
          />
        </SInputWrapper>
        <SRememberWrapper>
          <Checkbox
            id="remember"
            name="remember"
            label="დამიმახსოვრე"
            register={register}
            watch={watch}
          />
          <SForgotPasswordLink to={"/recovery-password"}>
            დაგავიწყდა პაროლი?
          </SForgotPasswordLink>
        </SRememberWrapper>
        {serverErrors && <SError>{serverErrors}</SError>}
        <Button width="21.25rem">ავტორიზაცია</Button>
        <SRegistrationText>
          არ გაქვს ანგარიში?
          <SRegistrationLink to={"/registration"}>
            დარეგისტრირდი
          </SRegistrationLink>
        </SRegistrationText>
      </SForm>
      <SAuthenticationSvgs>
        <SVectorSvg src="assets/svg/vector.svg" alt="vector" />
        <StarTopSvg src="assets/svg/starTop.svg" alt="starTop" />
        <StarBottomSvg src="assets/svg/starBottom.svg" alt="starTop" />
      </SAuthenticationSvgs>
    </SAuthenticationView>
  );
};
