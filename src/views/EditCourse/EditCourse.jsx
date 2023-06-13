import React, { useState } from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Footer } from "../../components/Footer";
import {
  SEditCourseMainDiv,
  SCourseTitle,
  SContainer,
  SGridContainer,
  SButtonContainer,
} from "./EditCourse.styled";
import { Dropdown } from "../../components/Inputs/Dropdown";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { MultiplePageDropdown } from "../../components/Inputs/MultipleOptionDropdown";
export const EditCourse = () => {
  const { register, control } = useForm();

  return (
    <SEditCourseMainDiv>
      <FourthHeader />
      <SCourseTitle>სწავლების დამატება/რედაქტირება</SCourseTitle>
      <SContainer>
        <SGridContainer>
          <Dropdown
            name="course"
            label="მიმართულების დასახელება"
            width="18.75rem"
            placeholder="მიმართულების დასახელება"
            items={{
              1: "UI/UX დიზაინი",
              2: "Front End",
              3: "Back End",
              4: "PM",
            }}
            control={control}
          ></Dropdown>
          
          <MultiplePageDropdown
            name="lecturer"
            label="ლექტორი"
            width="18.75rem"
            placeholder="ლექტორის სახელი და გვარი"
            items={{ 1: "გიორგი", 2: "გიო", 3: "ბექა" }}
            control={control}
          ></MultiplePageDropdown>

          <Dropdown
            name="teaching_type"
            label="სწავლების ტიპი"
            width="18.75rem"
            placeholder=""
            items={{ 1: "პირველი", 2: "მეორე", 3: "მესამე" }}
            control={control}
          ></Dropdown>
        </SGridContainer>
      </SContainer>
      <SButtonContainer>
        <Button width="15rem" height={"3rem"} secondary={"secondary"}>
          გაუქმება
        </Button>
        <Button width="15rem" height={"3rem"}>
          დამატება
        </Button>
      </SButtonContainer>
      <section>
        <SideBar />
      </section>
      <Footer />
    </SEditCourseMainDiv>
  );
};
