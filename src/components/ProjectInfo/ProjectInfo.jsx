import {
  SProjectInfoContainer,
  SDateDiv,
  SProjectInfoDiv,
  SImage,
  STitleAndRoleDiv,
  SProjectTitle,
  SProjectRole,
  SProjectStatus,
  SProjectDescription,
  SArrowButton,
} from "./ProjectInfo.styled";

const FINAL_STATUS = "საფინალო პროექტი"

export const ProjectInfo = ({ projectObj }) => {
  return (
    <SProjectInfoContainer>
      <SDateDiv>
        {projectObj.startDate}-{projectObj.endDate}
      </SDateDiv>
      <SProjectInfoDiv>
        <SImage src={projectObj.image} alt={projectObj.title} />
        <div>
          <div>
            <STitleAndRoleDiv>
              <SProjectTitle>{projectObj.title}</SProjectTitle>{" "}
              <SProjectRole>{projectObj.role}</SProjectRole>
            </STitleAndRoleDiv>
            <SProjectStatus
              isFinalProject={projectObj.status === FINAL_STATUS }
            >
              #{projectObj.status}
            </SProjectStatus>
          </div>
          <SProjectDescription>{projectObj.description}</SProjectDescription>
        </div>
        <SArrowButton isFinalProject={projectObj.status ===FINAL_STATUS }>
          სრულად
        </SArrowButton>
      </SProjectInfoDiv>
    </SProjectInfoContainer>
  );
};
