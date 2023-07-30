import { useState } from "react";
import { useForm } from "react-hook-form";

import AsyncSelect from "react-select/async";

import { items } from "./itemsData";

import {
  SBgStarTopRight,
  SButtonWrapper,
  SContentWrapper,
  SInputWrapper,
  SPositionWrapper,
  SReactSelect,
  STeamContainer,
  STeamMember,
  STitle,
} from "./UploadProjectAdmin.styled";
import { BgStarTopRight } from "./SVG/BgStarTopRight";
import { UpArrow } from "./SVG/UpArrow";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import { Textarea } from "../../components/Inputs/Textarea";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { Button } from "../../components/Button";
import { PlusSvg } from "../../components/Buttons/AdditionalResources/IconSvg/PlusSvg";
import { DropdownRadio } from "../../components/Inputs/DropdownRadio/DropdownRadio";

export const UploadProjectAdmin = () => {
  const [data, setData] = useState(items);
  const [team, setTeam] = useState([{ name: "", position: "", img: "" }]);

  const handleAddTeamMember = () => {
    setTeam([...team, { name: "", position: "", img: "" }]);
  };

  // let dataForDropdown = {};

  // items.filter((item) => {
  //   dataForDropdown[item.id] = item.value;
  // });

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: "all", delayError: 500 });

  const onSubmit = (data) => {
    console.log(data);
  };

  const filterUsers = (inputValue) => {
    return items.filter((i) =>
      i.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(filterUsers(inputValue));
      }, 1000);
    });

  return (
    <>
      <FourthHeader />
      <SBgStarTopRight>
        <BgStarTopRight />
      </SBgStarTopRight>
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
                  {/* <Input
                    placeholder="აირჩიეთ სახელი და გვარი"
                    control={control}
                    name={`member-name-${index}`}
                    label="სახელი, გვარი"
                    width="26.375rem"
                    register={register}
                    items={dataForDropdown}
                  /> */}
                  <SReactSelect>
                    <label htmlFor="AsyncSelect">სახელი, გვარი</label>
                    <AsyncSelect
                      placeholder="სახელი, გვარი"
                      isClearable
                      cacheOptions
                      defaultOptions
                      loadOptions={promiseOptions}
                      getOptionLabel={(option) => option.value} // Display the user value in the select dropdown
                      styles={{
                        placeholder: (baseStyles, state) => ({
                          ...baseStyles,
                          fontSize: "0.875rem",
                        }),
                      }}
                    />
                  </SReactSelect>
                  <SPositionWrapper>
                    <DropdownRadio
                      name={`member-position-${index}`}
                      control={control}
                    />
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#373737",
                        borderRadius: "50%",
                        position: "absolute",
                        top: "65%",
                        right: "-30%",
                        transform: "translate(-50%,-50%)",
                      }}
                    >
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: "50%",
                          backgroundImage:
                            "url('https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80')",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  </SPositionWrapper>
                </STeamMember>
              </STeamContainer>
            );
          })}
        </SInputWrapper>
        <SButtonWrapper>
          <UpArrow />
          <Button
            type="button"
            width={"13.3125rem"}
            LeftComponent={<PlusSvg />}
            onClick={handleAddTeamMember}
          >
            დამატება
          </Button>
        </SButtonWrapper>
        {/* <button type="submit">Click</button> */}
      </SContentWrapper>
    </>
  );
};
