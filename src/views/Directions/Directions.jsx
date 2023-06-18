import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import {
  SDirectionsWrapper,
  SInputForm,
  STitle,
  SButtons,
  SBackground,
} from "./Directions.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { items } from "./SidebarItems";
import { Uploader } from "../../components/Buttons/Uploader";
import { SUploaderContainer } from "../../components/Buttons/Uploader/Uploader.styled";
import { Button } from "../../components/Button/Button";
import { BackgroundStar } from "./BackgroundSvg/BackgroundStar";
import { Footer } from "../../components/Footer/Footer";

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
    <>
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
          <Uploader title="კურსის სილაბუსი" />
          <Uploader title="სტაჟირების სილაბუსი" />
          <Uploader title="სცადე,ისწავლე ასწავლე" />
          <Uploader title="უნილაბი სკოლაში" />
        </SUploaderContainer>
        <SButtons>
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
      </SDirectionsWrapper>
      <SBackground>
        <BackgroundStar />
      </SBackground>
      <Footer />
    </>
  );
};
