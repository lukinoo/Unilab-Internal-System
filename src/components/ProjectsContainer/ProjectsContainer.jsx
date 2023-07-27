import { SProjectsContainer } from "./ProjectsContainer.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";
import { useState } from "react";

const PROJECTS_PER_PAGE = 4;

export const ProjectsContainer = ({
  projects
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = (currentPage + 1) * PROJECTS_PER_PAGE;
  const pageCount = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  
  const getBatchData = (start, end) => {
    if (end === 0) {
      // corner case
      return [...projects.slice(start, -1), projects[data.length - 1]];
    }
    return projects.slice(start - PROJECTS_PER_PAGE, end - PROJECTS_PER_PAGE);
  };

  return (
    <SProjectsContainer>
      <SSecondaryTiTle>პროექტები და გამოცდილება</SSecondaryTiTle>
      {getBatchData(startIndex, endIndex).map((projectObj)=>(
        <>
          <p>{projectObj.title}</p>
          <p>{projectObj.description}</p>
        </>
      ))}
    </SProjectsContainer>
  )
}