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
import dayjs from "dayjs";
import "dayjs/locale/ka";
import { UploadProject } from "./views/UploadProject";

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
      </Routes>
    </div>
  );
};

export default App;
