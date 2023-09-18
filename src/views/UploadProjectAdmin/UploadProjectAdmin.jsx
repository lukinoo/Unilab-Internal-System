import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  SUploadProjectMainDiv,
  SContentWrapper,
  SInputWrapper,
  SPositionWrapper,
  STeamContainer,
  STeamMember,
  STitle,
  SAdditionalDataDiv,
  SButtonsDiv,
  CustomSelect,
  SArrowIcon,
  SPersonImg,
  SContainer,
} from "./UploadProjectAdmin.styled";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { SideBar } from "../../components/SideBar";
import { Input } from "../../components/Inputs/Input";
import { Textarea } from "../../components/Inputs/Textarea";
import { Button } from "../../components/Button";
import { RadioDropdown } from "../../components/Inputs/RadioDropdown/RadioDropdown";
import { Uploader } from "../../components/Uploader";
import { SingleUploader } from "../../components/Buttons/SingleUploader/SingleUploader";
import { LinkUploader } from "../../components/Inputs/LinkUploader";
import { Star } from "../../components/Star";
import defaultProfilePicture from "/assets/svg/defaultUser.svg";
import axios from "axios";

const customStyles = {
  control: (provided) => ({
    ...provided,
    color: "black",
    borderRadius: "0.625rem",
    height: "3.125rem",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "gray",
  }),
  option: (provided) => ({
    ...provided,
    background: "#ffffff",
    color: "#000",
  }),
};

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
  const [extraData, setExtraData] = useState([
    { title: "გლოსარიუმი", link: "" },
    { title: "გლოსარიუმი", link: "" },
    { title: "გლოსარიუმი", link: "" },
  ]);
  const [nameData, setNameData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState([]);
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

  // test function
  const handleUpdate = (index) => {
    const objToUpdate = extraData[index];
    console.log(index, objToUpdate);
  };

  const handleDelete = (index) => {
    setExtraData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const addNewLink = () => {
    const obj = {
      title: "გლოსარიუმი",
      link: "",
    };
    setExtraData((prevData) => [...prevData, obj]);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setNameData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // create options array for react-select
  const createOptions = () => {
    const options = nameData.map((obj) => ({
      value: obj.name,
      label: obj.name,
    }));
    return options;
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setOptions(createOptions);
  }, [nameData]);

  return (
    <SUploadProjectMainDiv>
      <FourthHeader />
      <Star number={1} top={"33.75rem"} left={"90%"} />
      <Star number={5} top={"55rem"} left={"60%"} />
      <Star number={4} top={"160rem"} left={"20%"} />
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
            marginTop="0.75rem"
          />

          <STitle marginTop="6.6rem" fontSize="1.25rem" fontWeight="500">
            პროექტზე მომუშავე გუნდი
          </STitle>
          {team.map((member, index) => {
            return (
              <STeamContainer key={index}>
                <STeamMember>
                  <SPositionWrapper>
                    <label>პოზიცია</label>
                    <CustomSelect
                      id={`team-member-name-${index}`}
                      name={`team-member-name-${index}`}
                      options={options}
                      value={searchTerm}
                      onChange={(value) => setSearchTerm(value)}
                      placeholder="ჩაწერეთ სახელი და გვარი"
                      searchable={true}
                      register={register}
                      errors={errors}
                      control={control}
                      width="26.375rem"
                      styles={customStyles}
                    />
                  </SPositionWrapper>

                  <SContainer>
                    <SPositionWrapper>
                      <label>პოზიცია</label>
                      <RadioDropdown
                        name={`member-position-${index}`}
                        control={control}
                        items={positions}
                        inputPlaceholder={"მიუთითეთ სხვა პოზიცია"}
                        updateCustomInput={updateCustomInput}
                        width="26.375rem"
                        height="3.125rem"
                      />
                    </SPositionWrapper>
                    <SPersonImg
                      src={member.img ? member.img : defaultProfilePicture}
                    />
                  </SContainer>
                </STeamMember>
              </STeamContainer>
            );
          })}
        </SInputWrapper>
        <SArrowIcon src="/assets/svg/chevronRight.svg" alt="up" />
        <Button
          LeftComponent={<img src="/assets/svg/plus.svg" alt="plus" />}
          width="13.3125rem"
          onClick={handleAddTeamMember}
          margin="5rem 0 5.9375rem"
        >
          დამატება
        </Button>

        <SingleUploader
          isImageType
          title="პროექტის ქავერი"
          name="ატვირთეთ ფოტო"
          width="64.4375rem"
          height="15.1875rem"
          margin="0 0 5.75rem"
        />
        <Uploader isImageType label="დამატებითი ფოტოები" />
        <STitle marginTop="6.6rem" fontSize="1.25rem" fontWeight="500">
          პროექტის დამატებითი რესურსები და ბმულები
        </STitle>
        <SAdditionalDataDiv>
          {extraData.map((obj, index) => (
            <LinkUploader
              title={obj.title}
              key={index}
              handleUpdate={() => handleUpdate(index)}
              handleDelete={() => handleDelete(index)}
            />
          ))}
        </SAdditionalDataDiv>
        <Button
          LeftComponent={<img src="/assets/svg/plus.svg" alt="plus" />}
          width="13.3125rem"
          onClick={addNewLink}
          margin="3rem 0 15.625rem"
        >
          დამატება
        </Button>

        <SButtonsDiv>
          <Button secondary>გაუქმება</Button>
          <Button type="submit">შენახვა</Button>
        </SButtonsDiv>
      </SContentWrapper>
    </SUploadProjectMainDiv>
  );
};