import React, { useState, useEffect } from "react";
import StudentSideNav from "./partials/student/SideNavigation";
import StudentMainHeader from "./partials/student/Header";
import StudentSubjects from "./partials/student/Subjects";
import ModalEnrollSubject from "./partials/student/modals/EnrollSubject";
import SubjectDetail from "./partials/student/SubjectDetail";
import Quizzes from "./partials/student/Quiz";
import Cookies from "js-cookie";
import { Routes, Route } from "react-router-dom";

const Student: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [count, setCount] = useState(0);
  const getUserId = () => Cookies.get("userId");

  useEffect(() => {
    if (getUserId() == undefined) {
      window.location.reload();
    }
    //console.log("Count is ticking: " + count);
    const timer = setTimeout(() => setCount(count + 1), 5000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      {/*begin::Root*/}
      <div className="d-flex flex-column flex-root">
        {/* <!--begin::Page--> */}
        <div className="page d-flex flex-row flex-column-fluid">
          {/* Side Navigation */}
          <StudentSideNav isNavDisplayed={isNavOpen} />
          {/* Container (Content Wrapper) */}
          <div
            className="d-flex flex-column flex-row-fluid content-bg"
            id="kt_wrapper"
          >
            {/* Container (Content Wrapper) */}
            <StudentMainHeader
              handleToggleNav={() => setIsNavOpen(!isNavOpen)}
            />
            {/* Content */}
            <Routes>
              {getUserId != undefined ? (
                <>
                  <Route
                    path="/"
                    element={<StudentSubjects userId={getUserId()} />}
                  />
                  <Route
                    path="SubjectDetail/:userSubjectId"
                    element={<SubjectDetail />}
                  />
                  <Route
                    path="Quiz/:subjectId/:challengeId"
                    element={<Quizzes />}
                  />
                </>
              ) : (
                <></>
              )}
            </Routes>
          </div>
        </div>
      </div>
      {/*End::Root*/}
      <ModalEnrollSubject />
      {isNavOpen ? (
        <div
          style={{ zIndex: 109 }}
          className="drawer-overlay"
          onClick={() => setIsNavOpen(!isNavOpen)}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Student;
