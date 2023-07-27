import { SProjectsContainer } from "./ProjectsContainer.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";

const PROJECTS_PER_PAGE = 4;

export const ProjectsContainer = ({
  projects
}) => {
  return (
    <SProjectsContainer>
      <SSecondaryTiTle>პროექტები და გამოცდილება</SSecondaryTiTle>
    </SProjectsContainer>
  )
}