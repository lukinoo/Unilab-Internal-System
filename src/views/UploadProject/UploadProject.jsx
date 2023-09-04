import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";

import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import { Uploader } from "../../components/Uploader/Uploader";
import { items } from "../Directions/SidebarItems";
import {
  SUploadProjectMainDiv,
  SBackgroundSvg,
  SButtonsWrapper,
  SContentWrapper,
  SInputWrapper,
  STitle,
  SUploaderContentWrapper,
} from "./UploadProject.styled";
import { Textarea } from "../../components/Inputs/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { SLabel } from "../../components/Inputs/Input/Input.styled";
import backgroundCircleSvg from "/assets/svg/backgroundcircle.svg";

const LinkAndLineComponent = () => {
  return (
    <img
      src="/assets/svg/link.svg"
      style={{ borderRight: "1px solid #EAEAEA", paddingRight: "1rem" }}
    />
  );
};

export const UploadProject = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: zodResolver(authenticationSchema),
    mode: "all",
    delayError: 500,
  });
  return (
    <SUploadProjectMainDiv>
      <SBackgroundSvg src={backgroundCircleSvg} />
      <FourthHeader />
      <SideBar items={items} />
      <SContentWrapper>
        <STitle>პროექტის ატვირთვა</STitle>
        <SInputWrapper>
          <Input
            id="project-name"
            name="project-name"
            type="text"
            label="პროექტის დასახელება"
            width="26.375rem"
            placeholder="ჩაწერეთ დასახელება"
            register={register}
            errors={errors}
            control={control}
          />
          <Textarea
            label="პროექტის აღწერა"
            control={control}
            name="project_desk"
            placeholder="პროექტის მოკლე აღწერა"
          />
          <SUploaderContentWrapper>
            <SLabel>ფაილის ატვირთვა</SLabel>
            <Uploader />
          </SUploaderContentWrapper>
        </SInputWrapper>
        <SInputWrapper>
          <Input
            id="link"
            name="link"
            type="url"
            label="დამატებითი ბმული"
            width="26.375rem"
            placeholder="მიუთითეთ ლინკი"
            register={register}
            errors={errors}
            control={control}
            LeftComponent={<LinkAndLineComponent />}
          ></Input>
        </SInputWrapper>
        <SButtonsWrapper>
          <Button secondary={true} width="14.875rem">
            გაუქმება
          </Button>
          <Button width="14.875rem">შენახვა</Button>
        </SButtonsWrapper>
      </SContentWrapper>
      <Footer />
    </SUploadProjectMainDiv>
  );
};
