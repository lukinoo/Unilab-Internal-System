import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";

import {
  SDirectionsMainDiv,
  SDirectionsWrapper,
  SInputForm,
  STitle,
  SButtons,
  SBackground,
} from "./Directions.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { items } from "./SidebarItems";
import { SingleUploader } from "../../components/Buttons/SingleUploader";
import { SUploaderContainer } from "../../components/Buttons/SingleUploader/SingleUploader.styled";
import { Button } from "../../components/Button";
import { BackgroundStar } from "./BackgroundSvg/BackgroundStar";
import { SAdditionalResources } from "../../components/Buttons/AdditionalResources/AdditionaResources.styled";
import { AdditionalResources } from "../../components/Buttons/AdditionalResources";
import { AnotherDirection } from "../../components/Buttons/AnotherDirection";
import { Footer } from "../../components/Footer";
import { LeftArrowSvg } from "../../components/Buttons/AdditionalResources/IconSvg/LeftArrowSvg";

export const Directions = () => {
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
    <SDirectionsMainDiv>
      <FourthHeader />
      <SideBar items={items} />
      <SDirectionsWrapper>
        <STitle>მიმართულების დამატება/რედაქტირება</STitle>
        <SInputForm>
          <Input
            id="name"
            type="text"
            name="name"
            label="მიმართულების დასახელება"
            width="18.25rem"
            fontSize="0.687rem"
            placeholder="ჩაწერეთ დასახელება"
            register={register}
            errors={errors}
          />
          <Dropdown
            name="teaching_type"
            label="ლექტორი/მენტორი"
            width="18.75rem"
            fontSize="0.687rem"
            placeholder="აირჩიეთ ლექტორის სახელი და გვარი"
            control={control}
            items={["ნინი წიკლაური", "test2"]}
          ></Dropdown>
        </SInputForm>

        <SUploaderContainer>
          <SingleUploader title="კურსის სილაბუსი" name="ატვირთე სილაბუსი" />
          <SingleUploader title="სტაჟირების სილაბუსი" name="ატვირთე სილაბუსი" />
          <SingleUploader title="სცადე,ისწავლე ასწავლე" name="ატვირთე სილაბუსი" />
          <SingleUploader title="უნილაბი სკოლაში" name="ატვირთე სილაბუსი" />
        </SUploaderContainer>

        <SAdditionalResources>
          <AdditionalResources title="დამატებითი რესურსები" />
        </SAdditionalResources>
      </SDirectionsWrapper>

      <AnotherDirection />

      <SButtons>
        <Link to="/">
          <Button
            type="submit"
            width="14.875rem"
            height="2.875rem"
            fontSize="1rem"
            secondary={true}
            LeftComponent={<LeftArrowSvg />}
          >
            დაბრუნება
          </Button>
        </Link>
        <Button
          type="submit"
          width="14.875rem"
          height="2.875rem"
          fontSize="1rem"
          secondary={true}
        >
          წაშლა
        </Button>
        <Button
          type="submit"
          width="14.875rem"
          height="2.875rem"
          fontSize="1rem"
        >
          დამატება
        </Button>
      </SButtons>

      <SBackground>
        <BackgroundStar />
      </SBackground>

      <Footer />
    </SDirectionsMainDiv>
  );
};
