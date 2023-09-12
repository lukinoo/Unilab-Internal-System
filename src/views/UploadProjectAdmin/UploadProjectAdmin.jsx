import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  SBgStarTopRight,
  SButtonWrapper,
  SContentWrapper,
  SInputWrapper,
  SPositionWrapper,
  STeamContainer,
  STeamMember,
  STitle,
  SAdditionalDataDiv
} from "./UploadProjectAdmin.styled";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import { Textarea } from "../../components/Inputs/Textarea";
import { Button } from "../../components/Button";
import { PlusSvg } from "../../components/Buttons/AdditionalResources/IconSvg/PlusSvg";
import { RadioDropdown } from "../../components/Inputs/RadioDropdown/RadioDropdown";
import { Uploader } from "../../components/Uploader";
import { SingleUploader } from "../../components/Buttons/SingleUploader/SingleUploader";
import { AnotherDirection } from "../../components/Buttons/AnotherDirection";
import { LinkUploader } from "../../components/Inputs/LinkUploader";

export const UploadProjectAdmin = () => {
  const [team, setTeam] = useState([{ name: "", position: "", img: "" }]);

  const handleAddTeamMember = () => {
    setTeam([...team, { name: "", position: "", img: "" }]);
  };

  const [positions, setPositions] = useState({
    1: "UI/UX დიზაინერი",
    2: "Frond End დეველოპერი",
    3: "პროექტის მენეჯერი",
    4: "",
  });

  const extraData = [{title: 'გლოსარიუმი'}, {title: 'გლოსარიუმი'}, {title: 'გლოსარიუმი'}];

  const updateCustomInput = (newValue) => {
    const positionsCopy = { ...positions };
    const lastKey = Object.keys(positionsCopy).pop();
    console.log("LAST KEY:", lastKey);
    positionsCopy[lastKey] = newValue;
    setPositions(positionsCopy);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: "all", delayError: 500 });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <FourthHeader />
      {/* <SBgStarTopRight>
        <BgStarTopRight />
      </SBgStarTopRight> */}
      <SideBar />
      <SContentWrapper onSubmit={handleSubmit(onSubmit)}>
        <STitle>პროექტის ატვირთვა</STitle>
        <SInputWrapper>
          <Input
            id="project-name"
            name="project_name"
            type="text"
            label="პროექტის დასახელება"
            width="26.375rem"
            placeholder="ჩაწერეთ დასახელება"
            errors={errors}
            register={register}
          />
          <Textarea
            label="პროექტის აღწერა"
            control={control}
            name="project_desk"
            placeholder="პროექტის მოკლე აღწერა"
          />

          <STitle marginTop="6.6rem" fontSize="1.25rem" fontWeight="500">
            პროექტზე მომუშავე გუდნი
          </STitle>
          {team.map((member, index) => {
            return (
              <STeamContainer key={index}>
                <STeamMember>
                  <Input
                    id={`team-member-name-${index}`}
                    name={`team-member-name-${index}`}
                    type="text"
                    placeholder="ჩაწერეთ სახელი და გვარი"
                    value={member.name}
                    label="სახელი, გვარი"
                    width="26.375rem"
                    register={register}
                    errors={errors}
                    control={control}
                  />
                  <SPositionWrapper>
                    <label>პოზიცია</label>
                    <RadioDropdown
                      name={`member-position-${index}`}
                      control={control}
                      items={positions}
                      inputPlaceholder={"მიუთითეთ სხვა პოზიცია"}
                      updateCustomInput={updateCustomInput}
                      width="26.375rem"
                    />
                  </SPositionWrapper>
                </STeamMember>
              </STeamContainer>
            );
          })}
        </SInputWrapper>
        <SButtonWrapper>
          {/* <UpArrow /> */}
          <Button
            width={"13.3125rem"}
            LeftComponent={<PlusSvg />}
            onClick={handleAddTeamMember}
          >
            დამატება
          </Button>
        </SButtonWrapper>
        
        <SingleUploader
          isImageType
          title="პროექტის ქავერი"
          name="ატვირთეთ ფოტო"
          width="64.4375rem"
          height="15.1875rem"
        />
        <Uploader isImageType />
        <p>პროექტის ბმული და დამატებითი რესურსები</p>
        {/* <AnotherDirection /> */}
        <SAdditionalDataDiv>
          {extraData.map((obj, index)=>(
            <LinkUploader title={obj.title} key={index} />
          ))}
        </SAdditionalDataDiv>
       
        <button type="submit">Click</button>
      </SContentWrapper>
    </>
  );
};
