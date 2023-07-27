import { SProjectInfoContainer, SDateDiv, SProjectInfoDiv} from "./ProjectInfo.styled"

export const ProjectInfo = ({projectObj}) => {
  return (
    <SProjectInfoContainer>
      <SDateDiv>{projectObj.startDate}-{projectObj.endDate}</SDateDiv>
      <SProjectInfoDiv>
        {/* image */}
        <div>
          <div>
            {/* title */}
            {/* role */}
            {/* status */}
          </div>
          {/* description */}
        </div>
        {/* button */}
      </SProjectInfoDiv>
    </SProjectInfoContainer>
  )
}
