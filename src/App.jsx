import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./views/MainPage";
import { Authentication } from "./views/Authentication";
import { PrivacyPolicy } from "./views/PrivacyPolicy";
import { RecoveryPassword } from "./views/RecoveryPassword";
import { Registration } from "./views/Registration";
import { StudentListPage } from "./views/StudentListPage";
import { EditCourse } from "./views/EditCourse";
import { AboutProject } from "./views/AboutProject";
import { Directions } from "./views/Directions";
import { AddQuestions } from "./views/AddQuestions";
import { Portfolio } from "./views/Portfolio";
import { ProjectPage } from "./views/ProjectPage";
import { UploadProject } from "./views/UploadProject";
import { UploadProjectAdmin } from "./views/UploadProjectAdmin";
import dayjs from "dayjs";
import "dayjs/locale/ka";

dayjs.locale("ka");

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/recovery-password" element={<RecoveryPassword />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/student-list" element={<StudentListPage />} />
        <Route path="/edit-course" element={<EditCourse />} />
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/add-questions" element={<AddQuestions />} />
        <Route path="/upload-project" element={<UploadProject />} />
        <Route path="/upload-project-admin" element={<UploadProjectAdmin />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
