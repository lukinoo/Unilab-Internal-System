import { SProjectTeamSlider, SMemberDiv, SMemberImg } from "./ProjectTeamSlider.styled";
import { TestProjectData } from "../../views/ProjectPage/TestData";
import { settings } from "./sliderSettings";
import Slider from "react-slick";

export const ProjectTeamSlider = () =>{
  return (
    <SProjectTeamSlider {...settings}>
      <Slider {...settings}>
        {TestProjectData.team.map((obj, index)=>(
          <SMemberDiv>
            <SMemberImg src={obj.img} />
            <p>{obj.name}</p>
            <p>{obj.role}</p>
          </SMemberDiv>
        ))}
      </Slider>
    </SProjectTeamSlider>
  )
}