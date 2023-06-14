import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authenticationSchema } from "../../schemas/authentication";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import { SDirectionsWrapper, SInputForm, STitle } from "./Directions.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";

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
      <SideBar />
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
          ></Dropdown>
        </SInputForm>
      </SDirectionsWrapper>
    </>
  );
};
