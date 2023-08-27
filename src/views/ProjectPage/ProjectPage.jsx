import { useState } from "react"
import { FourthHeader } from "../../components/Headers/FourthHeader"
import { SProjectPageMainDiv } from "./ProjectPage.styled"
import { ProjectSlider } from "../../components/ProjectSlider"
import { TestProjectData } from "./TestData"

// user = person whose porfolio link was used to load the page
export const ProjectPage = () => {
  const user = 'ნინი წიკლაური'; // temporary string; **receive the user as a prop**
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleSliderChange = (i) => {
    setSliderIndex(i);
  };
  const findUserObj = () =>{
    const userObj = TestProjectData.team.filter(obj=>obj.name == user)[0];
    return userObj;
  }
  const role = findUserObj(user).role;
  const roleDescription = findUserObj(user).roleDescription;

  return (
    <SProjectPageMainDiv>
      <FourthHeader />
      <h2>საფინალო პროექტი</h2>
      <ProjectSlider onChange={handleSliderChange} data={TestProjectData.images} imgHeight={'37.5rem'}/>
      {/* Project info */}
      <div>
        <p>პროექტის დასახელება: {TestProjectData.name}</p>
        <p>პროექტის აღწერა:</p>
        <p>{TestProjectData.description}</p>
      </div>
      {/* Project info */}
      {/* img slider */}
      {/* My role */}
      <div>
        <p>ჩემი როლი: {role}</p>
        <p>{roleDescription}</p>
      </div>
      <p>პროექტის ხანგრძლივობა: {TestProjectData.duration}</p>
      {/* Project link */}
      {/* Used tools */}
    </SProjectPageMainDiv>
  );
}