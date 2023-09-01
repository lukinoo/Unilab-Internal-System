import {
  SProjectTeamSlider,
  SMemberDiv,
  SMemberImg,
  SRole,
  SName,
  SBlueLine,
} from "./ProjectTeamSlider.styled";
import { TestProjectData } from "../../views/ProjectPage/data/TestData";
import { settings } from "./sliderSettings";
import Slider from "react-slick";

export const ProjectTeamSlider = () => {
  return (
    <SProjectTeamSlider {...settings}>
      <Slider {...settings}>
        {TestProjectData.team.map((obj, index) => (
          <SMemberDiv key={index}>
            <SMemberImg src={obj.img} />
            <SName>{obj.name}</SName>
            <SBlueLine />
            <SRole>{obj.role}</SRole>
          </SMemberDiv>
        ))}
      </Slider>
    </SProjectTeamSlider>
  );
};
