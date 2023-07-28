import { SProjectsContainer, SProjectsList } from "./ProjectsContainer.styled";
import { SSecondaryTiTle } from "../../views/Portfolio/Portfolio.styled";
import { useState } from "react";
import { ProjectInfo } from "../ProjectInfo/ProjectInfo";
import { Pagination } from "../Pagination/Pagination";

const PROJECTS_PER_PAGE = 4;

export const ProjectsContainer = ({ projects }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const endIndex = (currentPage + 1) * PROJECTS_PER_PAGE;
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const getBatchData = (start, end) => {
    if (end === 0) {
      // corner case
      return [...projects.slice(start, -1), projects[data.length - 1]];
    }
    return projects.slice(start - PROJECTS_PER_PAGE, end - PROJECTS_PER_PAGE);
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber <= 0) return;
    if (totalPages < pageNumber * ITEMS_PER_PAGE) return;
    setCurrentPage(pageNumber);
  };

  return (
    <SProjectsContainer>
      <SSecondaryTiTle>პროექტები და გამოცდილება</SSecondaryTiTle>
      <SProjectsList>
        {getBatchData(startIndex, endIndex).map((projectObj) => (
          <ProjectInfo projectObj={projectObj} />
        ))}
      </SProjectsList>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </SProjectsContainer>
  );
};
