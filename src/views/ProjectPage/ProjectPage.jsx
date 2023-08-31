import { useState } from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import {
  SProjectPageMainDiv,
  SInfoDiv,
  SDescriptionDiv,
  SLargeText,
  SProjectRole,
  SSliderDiv,
} from "./ProjectPage.styled";
import { ProjectSlider } from "../../components/ProjectSlider";
import { TestProjectData } from "./TestData";
import { ProjectTeamSlider } from "../../components/ProjectTeamSlider/ProjectTeamSlider";

// user = person whose porfolio link was used to load the page
export const ProjectPage = () => {
  const user = "ნინი წიკლაური"; // temporary string; **receive the user as a prop**
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };
  const findUserObj = () => {
    const userObj = TestProjectData.team.filter((obj) => obj.name == user)[0];
    return userObj;
  };
  const role = findUserObj(user).role;
  const roleDescription = findUserObj(user).roleDescription;

  return (
    <SProjectPageMainDiv>
      <FourthHeader />
      <h2>საფინალო პროექტი</h2>
      <ProjectSlider
        onChange={handleSliderChange}
        data={TestProjectData.images}
        imgHeight={"37.5rem"}
      />
      <SInfoDiv>
        <SLargeText>
          პროექტის დასახელება: <span>{TestProjectData.name}</span>
        </SLargeText>
        <p>პროექტის აღწერა:</p>
        <SDescriptionDiv>
          <p>{TestProjectData.description}</p>
        </SDescriptionDiv>
      </SInfoDiv>
      <SSliderDiv>
        <p>პროექტზე მუშაობდნენ:</p>
        <ProjectTeamSlider />
      </SSliderDiv>
      <SInfoDiv>
        <SProjectRole>
          ჩემი როლი: <span>{role}</span>
        </SProjectRole>
        <SDescriptionDiv width={"75%"}>
          <p>{roleDescription}</p>
        </SDescriptionDiv>
      </SInfoDiv>
      <SLargeText>
        პროექტის ხანგრძლივობა: <span>{TestProjectData.duration}</span>
      </SLargeText>
      {/* Footer */}
    </SProjectPageMainDiv>
  );
};
